package com.drconvert.drconvert.presentation.controllers.project;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.project.AddProjectUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.dto.AddProjectRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

@RestController
@RequestMapping("/api")
public class AddProjectController {
  
  @Autowired
  private AddProjectUseCase addProject;

  @Autowired
  private FindUserByIdUseCase findUserById;

  @PostMapping("/projects")
  public ResponseEntity<Project> addProject(@RequestBody @Validated AddProjectRequestDTO data) {
    Optional<User> userExists = this.findUserById.find(Long.valueOf(data.userId()));

    if(!userExists.isPresent()) {
      throw new UserNotFoundException();
    }

    try {
      Project project = new Project();
      project.setName(data.name());
      project.setUser(userExists.get());
      project.setTotalFields(data.totalFields());

      Project newProject = this.addProject.add(project);

      return ResponseEntity.status(201).body(newProject);
    } catch (Exception e) {
      throw new BadRequestException();
    }
  }

}
