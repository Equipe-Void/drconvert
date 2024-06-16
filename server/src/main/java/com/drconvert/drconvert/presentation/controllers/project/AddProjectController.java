package com.drconvert.drconvert.presentation.controllers.project;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.project.AddProjectUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.dto.project.AddProjectRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;
import com.drconvert.drconvert.domain.usecases.file.LogService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AddProjectController {

  @Autowired
  private AddProjectUseCase addProject;

  @Autowired
  private FindUserByIdUseCase findUserById;

  @Autowired
  private LogService logService;

  @PostMapping("/projects")
  public ResponseEntity<Project> addProject(@RequestBody @Validated AddProjectRequestDTO data) {
    Optional<User> userExists = this.findUserById.find(Long.valueOf(data.userId()));

    if (!userExists.isPresent()) {
      throw new UserNotFoundException();
    }

    User user = userExists.get();

    try {
      Project newProject = this.addProject.add(data, user);
      logService.logAction(user, "add_project", newProject);
      return ResponseEntity.status(201).body(newProject);
    } catch (Exception e) {
      logService.logAction(user, "add_project_error", null);
      throw new BadRequestException("Erro ao adicionar um projeto");
    }
  }
}
