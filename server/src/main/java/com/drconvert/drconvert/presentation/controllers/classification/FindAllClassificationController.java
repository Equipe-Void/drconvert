package com.drconvert.drconvert.presentation.controllers.classification;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.usecases.classification.FindAllClassificationUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindAllClassificationController {
  
  @Autowired
  private FindAllClassificationUseCase findAllClassificationUseCase;

  @GetMapping("/classifications")
  public ResponseEntity<List<Classification>> findAll() {
    try {
      List<Classification> classifications = this.findAllClassificationUseCase.findAll();
      return ResponseEntity.ok(classifications);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao buscar todas as classificações");
    }
  }

}
