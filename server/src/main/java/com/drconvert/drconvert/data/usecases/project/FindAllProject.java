package com.drconvert.drconvert.data.usecases.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.FindAllProjectsUseCase;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;

@Service
public class FindAllProject implements FindAllProjectsUseCase {
  
  @Autowired
  private ProjectRepository projectRepository;

  @Override
  public List<Project> findAll() {
    return this.projectRepository.findAll();
  }

}
