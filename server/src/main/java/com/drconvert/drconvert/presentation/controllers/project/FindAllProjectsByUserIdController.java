package com.drconvert.drconvert.presentation.controllers.project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.project.FindAllProjectByUserIdUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindAllProjectsByUserIdController {
  
  @Autowired
  private FindAllProjectByUserIdUseCase findAllProjectsByUserId;

  @Autowired
  private FindUserByIdUseCase findUserByIdUseCase;

  @GetMapping("/projects/{id}")
  public ResponseEntity<List<Project>> findAllProjects(@PathVariable Long id) {
    Optional<User> userExists = this.findUserByIdUseCase.find(Long.valueOf(id));

    if(!userExists.isPresent()) {
      throw new UserNotFoundException();
    }

    List<Project> projects = this.findAllProjectsByUserId.findAll(Long.valueOf(id));

    return ResponseEntity.ok(projects);

  }

}
