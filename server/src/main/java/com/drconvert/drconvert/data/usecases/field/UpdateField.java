package com.drconvert.drconvert.data.usecases.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.UpdateFieldUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;
import com.drconvert.drconvert.presentation.dto.UpdateFieldRequestDTO;

@Service
public class UpdateField implements UpdateFieldUseCase {

  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public Field update(Field oldField, UpdateFieldRequestDTO data) {
    oldField.setName(data.name());
    oldField.setType(data.type());
    oldField.setIsIdentifier(data.isIdentifier());
    oldField.setIsNullable(data.isNullable());

    return fieldRepository.save(oldField);
  }

}