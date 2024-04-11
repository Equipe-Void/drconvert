package com.drconvert.drconvert.domain.usecases.project;

import java.util.List;

import com.drconvert.drconvert.domain.model.Project;

public interface FindAllProjectByUserIdUseCase {
  
  public List<Project> findAll(Long id);

}
