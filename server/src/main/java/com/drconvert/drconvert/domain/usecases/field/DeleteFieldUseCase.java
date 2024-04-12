package com.drconvert.drconvert.domain.usecases.field;

import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;

public interface DeleteFieldUseCase {
  
  void delete(Long fieldId) throws FieldNotFoundException;

}