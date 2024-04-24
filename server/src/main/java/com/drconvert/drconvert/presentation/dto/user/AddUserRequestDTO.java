package com.drconvert.drconvert.presentation.dto.user;

import java.util.List;

import com.drconvert.drconvert.domain.model.Role;

public record AddUserRequestDTO(String name, String email, String password, List<Role> roles) {
}
