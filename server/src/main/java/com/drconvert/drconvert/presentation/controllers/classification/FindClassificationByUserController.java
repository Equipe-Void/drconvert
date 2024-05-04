package com.drconvert.drconvert.presentation.controllers.classification;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.classification.FindAllClassificationUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindClassificationByUserController {

  @Autowired
  private FindAllClassificationUseCase findAllClassification;

  @Autowired
  private FindUserByIdUseCase findUserById;

  @GetMapping("/classifications/userId/{id}")
  public ResponseEntity<List<Classification>> findClassifications(@PathVariable("id") Long id) {

    Optional<User> userExists = findUserById.find(id);

    if (!userExists.isPresent()) {
      throw new UserNotFoundException();
    }

    try {
      List<Classification> classifications = findAllClassification.findAll();

      return ResponseEntity.ok(classifications);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao buscar Classificações");
    }
  }

}
