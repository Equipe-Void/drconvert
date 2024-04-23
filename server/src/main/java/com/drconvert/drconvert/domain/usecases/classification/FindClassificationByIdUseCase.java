package com.drconvert.drconvert.domain.usecases.classification;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.Classification;

public interface FindClassificationByIdUseCase {

  Optional<Classification> find(Long id);

}