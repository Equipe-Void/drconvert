package com.drconvert.drconvert.domain.usecases.user;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.User;

public interface FindUserByEmailUseCase {
  
  public Optional<User> find(String email);

}
