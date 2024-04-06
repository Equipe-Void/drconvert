package com.drconvert.drconvert.presentation.errors;

public class ProjectNotFoundException extends RuntimeException {
  
  public ProjectNotFoundException() {
    super("Projeto não encontrado");
  }

  public ProjectNotFoundException(String message) {
    super(message);
  }

}
