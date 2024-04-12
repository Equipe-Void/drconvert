package com.drconvert.drconvert.presentation.controllers.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.usecases.field.DeleteFieldUseCase;
import com.drconvert.drconvert.presentation.errors.FieldNotFoundException;

@RestController
@RequestMapping("/api")
public class DeleteFieldController {

  @Autowired
  private DeleteFieldUseCase deleteField;

  @DeleteMapping("/fields/{fieldId}")
  public ResponseEntity<Void> deleteField(@PathVariable Long fieldId) {
    // Tenta deletar o campo com o ID fornecido
    try {
      deleteField.delete(fieldId);
      return ResponseEntity.noContent().build(); // Retorna uma resposta vazia com status 204 (No Content) se bem-sucedido
    } catch (FieldNotFoundException e) {
      return ResponseEntity.notFound().build(); // Retorna uma resposta com status 404 (Not Found) se o campo não for encontrado
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Retorna uma resposta com status 500 (Internal Server Error) se ocorrer um erro interno
    }
  }
}