package com.drconvert.drconvert.data.usecases.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.field.AddFieldUseCase;
import com.drconvert.drconvert.infra.repositories.FieldRepository;
import com.drconvert.drconvert.presentation.dto.field.AddFieldRequestDTO;

@Service
public class AddField implements AddFieldUseCase {

  @Autowired
  private FieldRepository fieldRepository;

  @Override
  public Field add(AddFieldRequestDTO data, Project project) {
    Field newField = new Field();
    newField.setName(data.field().getName());
    newField.setProject(project);
    newField.setType(data.field().getType());
    newField.setIsIdentifier(data.field().getIsIdentifier());
    newField.setIsNullable(data.field().getIsNullable());
    return this.fieldRepository.save(newField);
  }

}
