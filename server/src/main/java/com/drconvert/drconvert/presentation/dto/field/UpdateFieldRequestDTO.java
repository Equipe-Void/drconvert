package com.drconvert.drconvert.presentation.dto.field;

public record UpdateFieldRequestDTO(String name, String type, Boolean isNullable, Boolean isIdentifier) {

}
