package com.drconvert.drconvert.presentation.controllers.admin;

import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.admin.AddUserUseCase;
import com.drconvert.drconvert.domain.usecases.user.FindUserByEmailUseCase;
import com.drconvert.drconvert.presentation.dto.user.AddUserRequestDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.UserAlreadyExistsException;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/admin")
public class AddUserController {

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private AddUserUseCase addUser;

  @Autowired
  private FindUserByEmailUseCase findUserByEmail;

  @PostMapping("/users")
  public ResponseEntity<?> addUser(@RequestBody @Validated AddUserRequestDTO data) {
    Optional<User> userExists = this.findUserByEmail.find(data.email());

    if (userExists.isPresent()) {
      throw new UserAlreadyExistsException();
    }

    try {
      User user = new User();
      user.setEmail(data.email());
      user.setPassword(passwordEncoder.encode(data.password()));
      user.setName(data.name());
      user.setRoles(data.roles());
      User createdUser = this.addUser.add(user);

      return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao criar este usuário");
    }
  }

}
