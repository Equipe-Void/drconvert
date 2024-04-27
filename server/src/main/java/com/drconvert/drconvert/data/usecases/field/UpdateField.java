package com.drconvert.drconvert.data.usecases.field;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.UpdateFieldUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;
import com.drconvert.drconvert.presentation.dto.field.UpdateFieldRequestDTO;

@Service
public class UpdateField implements UpdateFieldUseCase {

  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public Field update(Field oldField, UpdateFieldRequestDTO data, Optional<Classification> classification) {
    oldField.setName(data.name());
    oldField.setType(data.type());
    oldField.setIsIdentifier(data.isIdentifier());
    oldField.setIsNullable(data.isNullable());

    if (classification.isPresent()) {
      oldField.setClassification(classification.get());
    }

    return fieldRepository.save(oldField);
  }

}