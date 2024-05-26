package com.drconvert.drconvert.presentation.controllers.project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.FindProjectsByFiltersUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindProjectsByFiltersController {
  
  @Autowired
  private FindProjectsByFiltersUseCase findProjectsByFiltersUseCase;

  @GetMapping("/projects/filter")
  public ResponseEntity<List<Project>> findByFilters(
      @RequestParam(required = false) Optional<String> name,
      @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Optional<String> date,
      @RequestParam(required = false) Optional<String> user) {
    try {
      List<Project> projects = this.findProjectsByFiltersUseCase.findByFilters(name, date, user);
      return ResponseEntity.ok(projects);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao buscar projetos com filtros");
    }
  }
}
