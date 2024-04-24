package com.drconvert.drconvert.presentation.controllers.project;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.domain.usecases.project.UpdateProjectUseCase;
import com.drconvert.drconvert.presentation.dto.project.UpdateProjectRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UpdateProjectController {

  @Autowired
  private UpdateProjectUseCase updateProject;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @PutMapping("/projects/{id}")
  public ResponseEntity<Project> update(@PathVariable Long id, @RequestBody @Validated UpdateProjectRequestDTO data) {
    Optional<Project> projectExists = this.findProjectById.find(Long.valueOf(id));

    if (!projectExists.isPresent()) {
      throw new ProjectNotFoundException();
    }

    try {
      Project project = updateProject.update(Long.valueOf(id), data.name(), data.totalFields());

      return ResponseEntity.ok().body(project);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao tentar atualizar o projeto");
    }
  }

}
