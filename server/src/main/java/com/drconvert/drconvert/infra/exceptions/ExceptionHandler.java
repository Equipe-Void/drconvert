package com.drconvert.drconvert.infra.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;
import com.drconvert.drconvert.presentation.errors.NotFoundException;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;
import com.drconvert.drconvert.presentation.errors.UserAlreadyExistsException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

@ControllerAdvice
public class ExceptionHandler extends ResponseEntityExceptionHandler {

  @org.springframework.web.bind.annotation.ExceptionHandler(UserAlreadyExistsException.class)
  private ResponseEntity<String> userAlreadyExists(UserAlreadyExistsException exception) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
  }

  @org.springframework.web.bind.annotation.ExceptionHandler(BadRequestException.class)
  private ResponseEntity<String> badRequest(BadRequestException exception) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
  }

  @org.springframework.web.bind.annotation.ExceptionHandler(UserNotFoundException.class)
  private ResponseEntity<String> userNotFound(UserNotFoundException exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
  }

  @org.springframework.web.bind.annotation.ExceptionHandler(ProjectNotFoundException.class)
  private ResponseEntity<String> projectNotFound(ProjectNotFoundException exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
  }

  @org.springframework.web.bind.annotation.ExceptionHandler(FieldNotFoundException.class)
  private ResponseEntity<String> fieldNotFound(FieldNotFoundException exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
  }

  @org.springframework.web.bind.annotation.ExceptionHandler(NotFoundException.class)
  private ResponseEntity<String> notFound(NotFoundException exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
  }

}
