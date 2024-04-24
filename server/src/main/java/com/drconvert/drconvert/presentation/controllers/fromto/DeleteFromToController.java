package com.drconvert.drconvert.presentation.controllers.fromto;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.DeleteFromToUseCase;
import com.drconvert.drconvert.domain.usecases.fromto.FindFromToByIdUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.NotFoundException;

import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class DeleteFromToController {

  @Autowired
  private FindFromToByIdUseCase findFromToById;

  @Autowired
  private DeleteFromToUseCase deleteFromTo;

  @DeleteMapping("/fromto/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    Optional<FromTo> fromtoExist = findFromToById.find(id);

    if (fromtoExist.isEmpty()) {
      throw new NotFoundException("Classificação não encontrada");
    }

    try {
      deleteFromTo.delete(Long.valueOf(id));
      return ResponseEntity.status(204).build();
    } catch (Exception e) {
      throw new BadRequestException("Erro ao deletar a classificação");
    }
  }

}
