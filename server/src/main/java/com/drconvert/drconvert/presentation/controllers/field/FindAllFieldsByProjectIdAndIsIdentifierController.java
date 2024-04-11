package com.drconvert.drconvert.presentation.controllers.field;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.field.FindAllFieldsByProjectIdAndByIsIdentifierUseCase;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.presentation.dto.FindAllFieldsByProjectIdAndIsIdentifierRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindAllFieldsByProjectIdAndIsIdentifierController {
  
  @Autowired
  private FindAllFieldsByProjectIdAndByIsIdentifierUseCase findAllFields;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @GetMapping("/fields")
  public ResponseEntity<List<Field>> findAll(@RequestBody @Validated FindAllFieldsByProjectIdAndIsIdentifierRequestDTO data) {
    Optional<Project> projectExists = this.findProjectById.find(Long.valueOf(data.projectId()));

    if(!projectExists.isPresent()) {
      throw new ProjectNotFoundException();
    }

    try {
      List<Field> fields = this.findAllFields.findAll(Long.valueOf(data.projectId()));

      return ResponseEntity.ok(fields);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao tentar buscar os campos do projeto;");
    }
  }
  
}
