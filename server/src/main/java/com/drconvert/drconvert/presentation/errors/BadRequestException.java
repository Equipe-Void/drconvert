package com.drconvert.drconvert.presentation.errors;

public class BadRequestException extends RuntimeException {

  public BadRequestException() {
    super("Bad request");
  }

  public BadRequestException(String message) {
    super(message);
  }

}
