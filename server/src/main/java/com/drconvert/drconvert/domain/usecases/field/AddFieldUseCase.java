package com.drconvert.drconvert.domain.usecases.field;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.presentation.dto.field.AddFieldRequestDTO;

public interface AddFieldUseCase {

  public Field add(AddFieldRequestDTO data, Project project);

}
