package com.drconvert.drconvert.domain.usecases.classification;

import java.util.List;

import com.drconvert.drconvert.domain.model.Classification;

public interface FindAllClassificationUseCase {

  List<Classification> findAll();

}
