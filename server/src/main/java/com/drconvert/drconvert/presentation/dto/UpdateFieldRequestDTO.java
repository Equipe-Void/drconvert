package com.drconvert.drconvert.presentation.dto;

public record UpdateFieldRequestDTO(String name, String type, Boolean isNullable, Boolean isIdentifier) {
  
}
