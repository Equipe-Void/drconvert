package com.drconvert.drconvert.presentation.controllers.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FindUserByIdController {
  
  @Autowired
  private FindUserByIdUseCase findUserById;

  @GetMapping("/users/{id}")
  public ResponseEntity<User> findUser(@PathVariable Long id) {
    Optional<User> userExists = this.findUserById.find(Long.valueOf(id));

    if(!userExists.isPresent()) {
      throw new UserNotFoundException();
    }

    return ResponseEntity.ok(userExists.get());
  }

}
