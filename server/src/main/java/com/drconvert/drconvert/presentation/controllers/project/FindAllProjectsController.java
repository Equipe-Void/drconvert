package com.drconvert.drconvert.presentation.controllers.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.FindAllProjectsUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindAllProjectsController {
  
  @Autowired
  private FindAllProjectsUseCase findAllProjects;

  @GetMapping("/projects")
  public ResponseEntity<List<Project>> findAll() {
    try {
      List<Project> projects = this.findAllProjects.findAll();

      return ResponseEntity.ok(projects);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao buscar todos os projetos");
    }
  }
  

}
