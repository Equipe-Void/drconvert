package com.drconvert.drconvert.presentation.errors;

public class FieldNotFoundException extends RuntimeException {
  
  public FieldNotFoundException() {
    super("Este usuário já existe");
  }

  public FieldNotFoundException(String message) {
    super(message);
  }

}
