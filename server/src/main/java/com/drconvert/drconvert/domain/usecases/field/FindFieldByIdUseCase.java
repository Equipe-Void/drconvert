package com.drconvert.drconvert.domain.usecases.field;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.Field;

public interface FindFieldByIdUseCase {
  
  public Optional<Field> find(Long fieldId);

}
