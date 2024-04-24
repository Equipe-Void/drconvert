package com.drconvert.drconvert.presentation.controllers.fromto;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.classification.FindClassificationByIdUseCase;
import com.drconvert.drconvert.domain.usecases.fromto.AddFromToUseCase;
import com.drconvert.drconvert.presentation.dto.fromto.AddFromToRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.NotFoundException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AddFromToController {

  @Autowired
  private FindClassificationByIdUseCase findClassificationById;

  @Autowired
  private AddFromToUseCase addFromTo;

  @PostMapping("/fromto")
  public ResponseEntity<FromTo> add(@RequestBody @Validated AddFromToRequestDTO data) {
    Optional<Classification> classificationExist = findClassificationById.find(Long.valueOf(data.classificationId()));

    if (!classificationExist.isPresent()) {
      throw new NotFoundException("Classificação Não Encontrada");
    }

    try {
      FromTo newFromTo = this.addFromTo.add(data, classificationExist.get());

      return ResponseEntity.status(201).body(newFromTo);

    } catch (Exception e) {
      throw new BadRequestException("Erro ao adicionar uma Classificação");
    }
  }

}
