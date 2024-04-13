package com.drconvert.drconvert.domain.usecases.field;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;

public interface UpdateFieldUseCase {

  Field update(Long fieldId, Field updatedField) throws FieldNotFoundException;

}