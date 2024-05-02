package com.drconvert.drconvert.domain.usecases.classification;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.infra.repositories.ClassificationRepository;
import com.drconvert.drconvert.presentation.errors.ClassificationNotFoundException;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteClassificationUseCase {

    private final ClassificationRepository classificationRepository;

    @Autowired
    public DeleteClassificationUseCase(ClassificationRepository classificationRepository) {
        this.classificationRepository = classificationRepository;
    }

    @Autowired
    private FindUserByIdUseCase findUserByIdUseCase;

    public void delete(Long classificationId) {
        Classification classification = classificationRepository.findById(classificationId)
                .orElseThrow(ClassificationNotFoundException::new);

        Optional<User> userExists = findUserByIdUseCase.find(classification.getUser().getId());
        if (!userExists.isPresent()) {
            throw new UserNotFoundException();
        }

        classificationRepository.delete(classification);
    }

}
