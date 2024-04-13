package com.drconvert.drconvert.data.usecases.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.UpdateFieldUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;
import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;

@Service
public class UpdateField implements UpdateFieldUseCase {

  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public Field update(Long fieldId, Field updatedField) throws FieldNotFoundException {
    Field existingField = fieldRepository.findById(fieldId)
        .orElseThrow(() -> new FieldNotFoundException("Field not found"));

    existingField.setName(updatedField.getName());
    // set other properties as needed

    return fieldRepository.save(existingField);
  }

}