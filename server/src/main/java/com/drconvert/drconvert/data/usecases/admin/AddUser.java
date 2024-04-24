package com.drconvert.drconvert.data.usecases.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.admin.AddUserUseCase;
import com.drconvert.drconvert.infra.repositories.UserRepository;
import com.drconvert.drconvert.presentation.dto.user.AddUserRequestDTO;

@Service
public class AddUser implements AddUserUseCase {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public User add(AddUserRequestDTO data) {
    User user = new User();
    user.setEmail(data.email());
    user.setPassword(passwordEncoder.encode(data.password()));
    user.setName(data.name());
    user.setRoles(data.roles());
    return this.userRepository.save(user);
  }

}
