package com.drconvert.drconvert.presentation.dto.field;

import java.util.List;

import com.drconvert.drconvert.domain.model.Field;

public record AddFieldsRequestDTO(List<Field> fields) {
}
