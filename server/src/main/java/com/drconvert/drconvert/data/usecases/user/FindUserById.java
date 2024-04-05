package com.drconvert.drconvert.data.usecases.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.user.FindUserByIdUseCase;
import com.drconvert.drconvert.infra.repositories.UserRepository;

@Service
public class FindUserById implements FindUserByIdUseCase {
  
  @Autowired
  private UserRepository userRepository;

  @Override
  public Optional<User> find(Long id) {
    return this.userRepository.findById(id);
  }

}
