package com.drconvert.drconvert.data.usecases.classification;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.classification.FindClassificationByUserUseCase;
import com.drconvert.drconvert.infra.repositories.ClassificationRepository;

@Service
public class FindClassificationByUser implements FindClassificationByUserUseCase {

  @Autowired
  private ClassificationRepository classificationRepository;

  @Override
  public List<Classification> findClassifications(User user) {
    List<Classification> classifications = classificationRepository.findAllClassificationByUserId(user.getId());
    return classifications;
  }

}
