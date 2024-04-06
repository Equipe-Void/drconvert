package com.drconvert.drconvert.data.usecases.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.AddFieldUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;

@Service
public class AddField implements AddFieldUseCase {
  
  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public Field add(Field field) {
    return this.fieldRepository.save(field);
  }
  
}
