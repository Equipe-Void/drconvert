package com.drconvert.drconvert.infra.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.drconvert.drconvert.presentation.errors.UserAlreadyExistsException;

@ControllerAdvice
public class ExceptionHandler extends ResponseEntityExceptionHandler {
  
  @org.springframework.web.bind.annotation.ExceptionHandler(UserAlreadyExistsException.class)
  private ResponseEntity<String> userAlreadyExists(UserAlreadyExistsException exception) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
  }

}
