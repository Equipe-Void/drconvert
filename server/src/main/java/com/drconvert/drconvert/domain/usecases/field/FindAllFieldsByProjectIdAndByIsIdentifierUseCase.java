package com.drconvert.drconvert.domain.usecases.field;

import java.util.List;

import com.drconvert.drconvert.domain.model.Field;

public interface FindAllFieldsByProjectIdAndByIsIdentifierUseCase {
  
  public List<Field> findAll(Long projectId);

}
