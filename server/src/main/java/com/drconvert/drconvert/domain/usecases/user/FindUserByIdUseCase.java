package com.drconvert.drconvert.domain.usecases.user;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.User;

public interface FindUserByIdUseCase {
  
  public Optional<User> find(Long id);

}
