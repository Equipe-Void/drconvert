package com.drconvert.drconvert.domain.usecases.field;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.presentation.dto.field.UpdateFieldRequestDTO;

public interface UpdateFieldUseCase {

  Field update(Field oldField, UpdateFieldRequestDTO data);

}