package com.drconvert.drconvert.data.usecases.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.usecases.user.FindUserByEmailUseCase;
import com.drconvert.drconvert.infra.repositories.UserRepository;

@Service
public class FindUserByEmail implements FindUserByEmailUseCase {
  
  @Autowired
  private UserRepository userRepository;

  @Override
  public Optional<User> find(String email) {
    Optional<User> user = this.userRepository.findByEmail(email);

    if(user == null) {
      return Optional.empty();
    } 

    return user;
  }

}
