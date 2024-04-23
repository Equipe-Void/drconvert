package com.drconvert.drconvert.data.usecases.classification;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.usecases.classification.FindClassificationByIdUseCase;
import com.drconvert.drconvert.infra.repositories.ClassificationRepository;

@Service
public class FindClassificationById implements FindClassificationByIdUseCase {

  @Autowired
  private ClassificationRepository classificationRepository;

  @Override
  public Optional<Classification> find(Long id) {
    return this.classificationRepository.findById(id);
  }

}
