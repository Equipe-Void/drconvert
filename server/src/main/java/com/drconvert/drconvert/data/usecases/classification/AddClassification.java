package com.drconvert.drconvert.data.usecases.classification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.usecases.classification.AddClassificationUseCase;
import com.drconvert.drconvert.infra.repositories.ClassificationRepository;

@Service
public class AddClassification implements AddClassificationUseCase {

  @Autowired
  private ClassificationRepository classificationRepository;

  @Override
  public Classification add(Classification classification) {
    return this.classificationRepository.save(classification);
  }

}
