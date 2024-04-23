package com.drconvert.drconvert.presentation.controllers.field;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.DeleteFieldUseCase;
import com.drconvert.drconvert.domain.usecases.field.FindFieldByIdUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class DeleteFieldController {

  @Autowired
  private DeleteFieldUseCase deleteField;

  @Autowired
  private FindFieldByIdUseCase findFieldById;

  @DeleteMapping("/fields/{fieldId}")
  public ResponseEntity<Void> deleteField(@PathVariable Long fieldId) {
    Optional<Field> fieldExists = this.findFieldById.find(Long.valueOf(fieldId));

    if (!fieldExists.isPresent()) {
      throw new FieldNotFoundException();
    }

    try {
      this.deleteField.delete(Long.valueOf(fieldId));
      return ResponseEntity.noContent().build();
    } catch (FieldNotFoundException e) {
      throw new BadRequestException("Erro ao deletar campo");
    }
  }
}