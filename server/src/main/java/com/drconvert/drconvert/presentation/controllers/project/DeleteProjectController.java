package com.drconvert.drconvert.presentation.controllers.project;

import java.util.Optional;

import com.drconvert.drconvert.data.usecases.user.FindUserById;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.presentation.dto.project.UpdateProjectRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.DeleteProjectUseCase;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;
import com.drconvert.drconvert.domain.usecases.file.LogService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class DeleteProjectController {

  @Autowired
  private DeleteProjectUseCase deleteProject;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @Autowired
  private LogService logService;

  @DeleteMapping("/projects/{id}")
  public ResponseEntity<?> deleteProject(@PathVariable Long id) {
    Optional<Project> projectExists = this.findProjectById.find(Long.valueOf(id));

    if(!projectExists.isPresent()) {
      throw new ProjectNotFoundException();
    }

    try {
      this.deleteProject.delete(id);
      logService.logAction(null, "delete_project", projectExists.get());
      return ResponseEntity.ok().build();
    } catch (Exception e) {
      logService.logAction(null, "delete_project_error", projectExists.get());
      throw new BadRequestException("Erro ao tentar excluir o projeto");
    }
  }
}
