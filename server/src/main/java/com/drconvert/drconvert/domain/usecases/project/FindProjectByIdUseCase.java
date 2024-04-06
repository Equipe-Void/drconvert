package com.drconvert.drconvert.domain.usecases.project;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.Project;

public interface FindProjectByIdUseCase {
  
  public Optional<Project> find(Long id);

}
