package com.drconvert.drconvert.data.usecases.classification;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.usecases.classification.FindAllClassificationUseCase;
import com.drconvert.drconvert.infra.repositories.ClassificationRepository;

@Service
public class FindAllClassification implements FindAllClassificationUseCase {

  @Autowired
  private ClassificationRepository classificationRepository;

  @Override
  public List<Classification> findAll() {
    return this.classificationRepository.findAll();
  }

}
