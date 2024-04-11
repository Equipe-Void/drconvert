package com.drconvert.drconvert.presentation.controllers.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.field.AddFieldUseCase;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.presentation.dto.AddFieldRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;

@RestController
@RequestMapping("/api")
public class AddFieldController {
  
  @Autowired
  private AddFieldUseCase addField;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @PostMapping("/fields")
  public ResponseEntity<Field> addField(@RequestBody @Validated AddFieldRequestDTO data) {
    Field field = data.field();

    Project project = findProjectById.find(Long.valueOf(field.getProject().getId()))
      .orElseThrow(ProjectNotFoundException::new);

    try {
      Field newField = new Field();
      newField.setName(field.getName());
      newField.setProject(project);
      newField.setType(field.getType());
      newField.setIsIdentifier(field.getIsIdentifier());
      newField.setIsNullable(field.getIsNullable());
      
      Field addedField = this.addField.add(newField);

      return ResponseEntity.status(201).body(addedField);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao adicionar campo");
    }
  }
}