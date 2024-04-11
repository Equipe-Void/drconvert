package com.drconvert.drconvert.presentation.controllers.project;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.DeleteProjectUseCase;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class DeleteProjectController {
  
  @Autowired
  private DeleteProjectUseCase deleteProject;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @DeleteMapping("/projects/{id}")
  public ResponseEntity<?> deleteProject(@PathVariable Long id) {
    Optional<Project> projectExists = this.findProjectById.find(Long.valueOf(id));

    if(!projectExists.isPresent()) {
      throw new ProjectNotFoundException();
    }

    try {
      this.deleteProject.delete(Long.valueOf(id));

      return ResponseEntity.ok().build();
    } catch (Exception e) {
      throw new BadRequestException("Erro ao tentar excluir o projeto");
    }
  }

}
