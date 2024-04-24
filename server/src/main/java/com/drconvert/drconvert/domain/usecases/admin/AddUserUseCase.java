package com.drconvert.drconvert.domain.usecases.admin;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.presentation.dto.user.AddUserRequestDTO;

public interface AddUserUseCase {

  public User add(AddUserRequestDTO data);

}