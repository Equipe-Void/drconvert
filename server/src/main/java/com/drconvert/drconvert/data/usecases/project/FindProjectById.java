package com.drconvert.drconvert.data.usecases.project;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;

@Service
public class FindProjectById implements FindProjectByIdUseCase {
  
  @Autowired
  private ProjectRepository projectRepository;

  @Override
  public Optional<Project> find(Long id) {
    return this.projectRepository.findById(id);
  }

}
