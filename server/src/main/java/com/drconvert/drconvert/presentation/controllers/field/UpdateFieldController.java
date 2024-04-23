package com.drconvert.drconvert.presentation.controllers.field;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.UpdateFieldUseCase;
import com.drconvert.drconvert.domain.usecases.field.FindFieldByIdUseCase;
import com.drconvert.drconvert.presentation.dto.field.UpdateFieldRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UpdateFieldController {

  @Autowired
  private UpdateFieldUseCase updateField;

  @Autowired
  private FindFieldByIdUseCase findFieldById;

  @PutMapping("/fields/{id}")
  public ResponseEntity<Field> updateField(@PathVariable Long id, @RequestBody UpdateFieldRequestDTO data) {
    Optional<Field> fieldExists = this.findFieldById.find(Long.valueOf(id));

    if (!fieldExists.isPresent()) {
      throw new FieldNotFoundException();
    }

    try {
      Field field = this.updateField.update(fieldExists.get(), data);
      return ResponseEntity.ok(field);
    } catch (FieldNotFoundException e) {
      throw new BadRequestException("Erro ao atualizar campo");
    }
  }
}