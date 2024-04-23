package com.drconvert.drconvert.presentation.controllers.classification;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.classification.AddClassificationUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.dto.classification.AddClassificationRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AddClassificationController {

  @Autowired
  private AddClassificationUseCase addClassification;

  @Autowired
  private FindUserByIdUseCase findUserById;

  @PostMapping("/classifications")
  public ResponseEntity<Classification> addClassification(@RequestBody @Validated AddClassificationRequestDTO data) {

    Optional<User> userExists = this.findUserById.find(Long.valueOf(data.userId()));

    if (!userExists.isPresent()) {
      throw new UserNotFoundException();
    }

    try {
      Classification classification = new Classification();
      classification.setName(data.name());
      classification.setUser(userExists.get());

      Classification newClassification = this.addClassification.add(classification);

      return ResponseEntity.status(201).body(newClassification);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao adicionar uma Classificação");
    }

  }
}
