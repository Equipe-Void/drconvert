package com.drconvert.drconvert.presentation.controllers.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.UpdateProjectUseCase;
import com.drconvert.drconvert.presentation.dto.UpdateProjectRequestDTO;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UpdateProjectController {

  @Autowired
  private UpdateProjectUseCase updateProject;

  @PutMapping("/projects")
  public ResponseEntity<Project> update(@RequestBody @Validated UpdateProjectRequestDTO data) {
    Project project = updateProject.update(data.id(), data.name());
    return ResponseEntity.ok().body(project);
  }

}
