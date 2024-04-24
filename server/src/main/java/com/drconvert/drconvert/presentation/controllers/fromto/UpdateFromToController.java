package com.drconvert.drconvert.presentation.controllers.fromto;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.FindFromToByIdUseCase;
import com.drconvert.drconvert.domain.usecases.fromto.UpdateFromToUseCase;
import com.drconvert.drconvert.presentation.dto.fromto.UpdateFromToRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.NotFoundException;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UpdateFromToController {

  @Autowired
  private FindFromToByIdUseCase findFromToById;

  @Autowired
  private UpdateFromToUseCase updateFromTo;

  @PutMapping("/fromto/{id}")
  public ResponseEntity<FromTo> update(@RequestBody @Validated UpdateFromToRequestDTO data) {
    Optional<FromTo> oldFromTo = findFromToById.find(Long.valueOf(data.id()));

    if (oldFromTo.isEmpty()) {
      throw new NotFoundException("Classificação não encontrada");
    }

    try {
      FromTo updatedFromTo = this.updateFromTo.update(data);

      return ResponseEntity.status(200).body(updatedFromTo);

    } catch (Exception e) {
      throw new BadRequestException("Erro ao atualizar Classificação");
    }
  }
}
