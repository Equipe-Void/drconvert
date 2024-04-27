package com.drconvert.drconvert.presentation.controllers.classification;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.classification.UpdateClassificationUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.dto.classification.UpdateClassificationRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.ClassificationNotFoundException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UpdateClassificationController {

  @Autowired
  private UpdateClassificationUseCase updateClassification;

  @Autowired
  private FindUserByIdUseCase findUserById;

  @PutMapping("/classifications/{id}")
  public ResponseEntity<Classification> updateClassification(@PathVariable("id") Long id,
                                                             @RequestBody @Validated UpdateClassificationRequestDTO data) {
    Optional<User> userExists = findUserById.find(Long.valueOf(data.userId()));

    if (!userExists.isPresent()) {
        throw new UserNotFoundException(); // Lança exceção se o usuário não for encontrado
    }
    
    try {
      Classification classification = new Classification();
      classification.setId(id);
      classification.setName(data.name());

      Classification updatedClassification = updateClassification.update(id, classification);

      if (updatedClassification == null) {
        throw new ClassificationNotFoundException();
      }

      return ResponseEntity.ok(updatedClassification);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao atualizar a Classificação");
    }
  }
}
