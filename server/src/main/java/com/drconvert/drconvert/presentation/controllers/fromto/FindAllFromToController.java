package com.drconvert.drconvert.presentation.controllers.fromto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.FindAllFromToUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindAllFromToController {
  
  @Autowired
  private FindAllFromToUseCase findAllFromToUseCase;

  @GetMapping("/fromto")
  public ResponseEntity<List<FromTo>> findAll() {
    try {
      List<FromTo> fromToList = this.findAllFromToUseCase.findAll();
      return ResponseEntity.ok(fromToList);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao buscar todos os FromTo");
    }
  }

}
