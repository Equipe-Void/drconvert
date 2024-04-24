package com.drconvert.drconvert.data.usecases.classification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.classification.AddClassificationUseCase;
import com.drconvert.drconvert.infra.repositories.ClassificationRepository;
import com.drconvert.drconvert.presentation.dto.classification.AddClassificationRequestDTO;

@Service
public class AddClassification implements AddClassificationUseCase {

  @Autowired
  private ClassificationRepository classificationRepository;

  @Override
  public Classification add(AddClassificationRequestDTO data, User user) {
    Classification classification = new Classification();
    classification.setName(data.name());
    classification.setUser(user);
    return this.classificationRepository.save(classification);
  }

}
