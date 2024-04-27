package com.drconvert.drconvert.domain.usecases.field;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.presentation.dto.field.UpdateFieldRequestDTO;

public interface UpdateFieldUseCase {

  Field update(Field oldField, UpdateFieldRequestDTO data, Optional<Classification> classification);

}