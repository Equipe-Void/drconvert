package com.drconvert.drconvert.data.usecases.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.project.AddProjectUseCase;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;
import com.drconvert.drconvert.presentation.dto.project.AddProjectRequestDTO;

@Service
public class AddProject implements AddProjectUseCase {

  @Autowired
  private ProjectRepository projectRepository;

  @Override
  public Project add(AddProjectRequestDTO data, User user) {
    Project project = new Project();
    project.setName(data.name());
    project.setUser(user);
    project.setTotalFields(data.totalFields());
    return this.projectRepository.save(project);
  }

}
