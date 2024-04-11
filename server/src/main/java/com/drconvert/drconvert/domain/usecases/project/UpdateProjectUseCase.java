package com.drconvert.drconvert.domain.usecases.project;

import com.drconvert.drconvert.domain.model.Project;

public interface UpdateProjectUseCase {
  public Project update(Long id, String name);
}