package com.drconvert.drconvert.domain.usecases.classification;

import java.util.List;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;

public interface FindClassificationByUserUseCase {

  List<Classification> findClassifications(User user);

}
