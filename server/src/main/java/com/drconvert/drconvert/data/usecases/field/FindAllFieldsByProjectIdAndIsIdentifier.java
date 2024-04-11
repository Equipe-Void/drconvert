package com.drconvert.drconvert.data.usecases.field;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.usecases.field.FindAllFieldsByProjectIdAndByIsIdentifierUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;

@Service
public class FindAllFieldsByProjectIdAndIsIdentifier implements FindAllFieldsByProjectIdAndByIsIdentifierUseCase {
  
  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public List<Field> findAll(Long projectId) {
    return this.fieldRepository.findAllByProjectIdAndIsIdentifier(projectId);
  }

}
