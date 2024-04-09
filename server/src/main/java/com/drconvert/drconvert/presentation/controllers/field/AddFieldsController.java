package com.drconvert.drconvert.presentation.controllers.field;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.field.AddFieldUseCase;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.presentation.dto.AddFieldRequestDTO;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class AddFieldsController {
  
  @Autowired
  private AddFieldUseCase addField;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @PostMapping("/fields/list")
  public ResponseEntity<List<Field>> addFields(@RequestBody @Validated AddFieldRequestDTO data) {
    List<Field> fields = new ArrayList<>();

    for (Field f : data.fields()) {
      Optional<Project> projectExists = this.findProjectById.find(Long.valueOf(f.getProject().getId()));

      if(!projectExists.isPresent()) {
        throw new ProjectNotFoundException();
      }

      Field field = new Field();
      field.setName(f.getName());
      field.setProject(projectExists.get());
      field.setType(f.getType());
      
      fields.add(this.addField.add(field));
    }

    return ResponseEntity.status(201).body(fields);
  }

}
