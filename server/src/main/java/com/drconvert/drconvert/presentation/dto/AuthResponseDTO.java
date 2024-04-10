package com.drconvert.drconvert.presentation.dto;

import com.drconvert.drconvert.domain.model.User;

public record AuthResponseDTO(String token, User user) {}
