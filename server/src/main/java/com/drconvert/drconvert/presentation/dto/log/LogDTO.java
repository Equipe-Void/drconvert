package com.drconvert.drconvert.presentation.dto.log;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.model.User;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LogDTO {
    private Long id;
    private User user;
    private String action;
    private LocalDateTime updatedAt;
    private Project project;
}
