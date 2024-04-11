package com.drconvert.drconvert.data.usecases.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.usecases.project.DeleteProjectUseCase;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;

@Service
public class DeleteProject implements DeleteProjectUseCase {
  
  @Autowired
  private ProjectRepository projectRepository;

  @Override
  public void delete(Long id) {
    this.projectRepository.deleteById(id);
  }

}
