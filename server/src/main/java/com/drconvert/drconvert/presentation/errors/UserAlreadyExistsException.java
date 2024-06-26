package com.drconvert.drconvert.presentation.errors;

public class UserAlreadyExistsException extends RuntimeException {
  
  public UserAlreadyExistsException() {
    super("Este usuário já existe");
  }

  public UserAlreadyExistsException(String message) {
    super(message);
  }

}
