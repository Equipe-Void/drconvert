package com.drconvert.drconvert.presentation.controllers.classification;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.data.usecases.classification.FindClassificationByUser;
import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
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
  private FindClassificationByUser findAllClassification;

  @Autowired
  private FindUserByIdUseCase findUserById;

  @GetMapping("/classifications/user/{userId}")
  public ResponseEntity<List<Classification>> findClassifications(@PathVariable("userId") Long userId) {

    Optional<User> userExists = findUserById.find(userId);

    if (!userExists.isPresent()) {
      throw new UserNotFoundException();
    }

    try {
      List<Classification> classifications = findAllClassification.findClassifications(userExists.get());

      return ResponseEntity.ok(classifications);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao buscar Classificações deste usuário");
    }
  }

}
