package com.drconvert.drconvert.domain.usecases.project;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.presentation.dto.project.AddProjectRequestDTO;

public interface AddProjectUseCase {

  public Project add(AddProjectRequestDTO data, User user);

}
