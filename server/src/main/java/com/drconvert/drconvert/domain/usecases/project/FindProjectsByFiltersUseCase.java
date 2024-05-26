package com.drconvert.drconvert.domain.usecases.project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;

@Service
public class FindProjectsByFiltersUseCase {

  @Autowired
  private ProjectRepository projectRepository;

  public List<Project> findByFilters(Optional<String> name, Optional<String> date, Optional<String> user) {
    return projectRepository.findByNameAndDateAndUser(
        name.orElse(null),
        date.orElse(null),
        user.orElse(null)
    );
  }
}
