package com.drconvert.drconvert.data.usecases.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.admin.AddUserUseCase;
import com.drconvert.drconvert.infra.repositories.UserRepository;

@Service
public class AddUser implements AddUserUseCase {

  @Autowired
  private UserRepository userRepository;

  @Override
  public User add(User user) {
    return this.userRepository.save(user);
  }
  
}
