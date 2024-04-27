package com.drconvert.drconvert.presentation.errors;

public class ClassificationNotFoundException extends RuntimeException {
  
  public ClassificationNotFoundException() {
    super("Classificação inexistente");
  }

  public ClassificationNotFoundException(String message) {
    super(message);
  }

}
