package com.drconvert.drconvert.data.usecases.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.usecases.field.DeleteFieldUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;
import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;

@Service
public class DeleteField implements DeleteFieldUseCase {
  
  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public void delete(Long fieldId) throws FieldNotFoundException {
    this.fieldRepository.deleteById(fieldId);
  }

}
