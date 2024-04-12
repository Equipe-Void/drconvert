package com.drconvert.drconvert.presentation.errors;

public class FieldNotFoundException extends RuntimeException {
  
  public FieldNotFoundException() {
    super("Campo inexistente");
  }

  public FieldNotFoundException(String message) {
    super(message);
  }

}
