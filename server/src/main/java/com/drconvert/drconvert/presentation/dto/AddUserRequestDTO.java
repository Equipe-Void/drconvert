package com.drconvert.drconvert.presentation.dto;

import java.util.List;

import com.drconvert.drconvert.domain.model.Role;
import com.fasterxml.jackson.annotation.JsonFormat;

public record AddUserRequestDTO(String name, String email, String password, @JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY) List<Role> roles) {}
