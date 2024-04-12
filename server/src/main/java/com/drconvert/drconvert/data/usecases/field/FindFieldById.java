package com.drconvert.drconvert.data.usecases.field;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.FindFieldByIdUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;

public class FindFieldById implements FindFieldByIdUseCase {
  
  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public Optional<Field> find(Long fieldId) {
    return this.fieldRepository.findById(fieldId);
  }

}
