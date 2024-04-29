package com.drconvert.drconvert.presentation.controllers.classification;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.classification.DeleteClassificationUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.errors.ClassificationNotFoundException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;
import com.drconvert.drconvert.infra.repositories.ClassificationRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class DeleteClassificationController {

    @Autowired
    private DeleteClassificationUseCase deleteClassificationUseCase;

    @Autowired
    private ClassificationRepository classificationRepository;

        @DeleteMapping("/classifications/{id}")
        public ResponseEntity<?> deleteClassification(@PathVariable("id") Long id) {
        try {
            // Verifica se a classificação existe
            Classification classification = classificationRepository.findById(id)
                    .orElseThrow(ClassificationNotFoundException::new);

            // Chama o caso de uso para excluir a classificação
            deleteClassificationUseCase.delete(id);

            return ResponseEntity.ok().build();
        } catch (ClassificationNotFoundException e) {
            throw e;
        } catch (Exception e) {
            throw e;
        }
    }

}
