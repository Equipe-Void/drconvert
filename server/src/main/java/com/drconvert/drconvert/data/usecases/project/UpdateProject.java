package com.drconvert.drconvert.data.usecases.project;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.project.UpdateProjectUseCase;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;

@Service
public class UpdateProject implements UpdateProjectUseCase {

  @Autowired
  private ProjectRepository projectRepository;

  public Project update(Long id, String name) {
    Optional<Project> project = this.projectRepository.findById(id);

    if (project.isEmpty()) {
      throw new ProjectNotFoundException();
    }

    project.get().setName(name);
    this.projectRepository.save(project.get());

    return project.get();
  }

}
