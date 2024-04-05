package com.drconvert.drconvert.data.usecases.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.AddProjectUseCase;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;

@Service
public class AddProject implements AddProjectUseCase {

  @Autowired
  private ProjectRepository projectRepository;

  @Override
  public Project add(Project project) {
    return this.projectRepository.save(project);
  }

}
