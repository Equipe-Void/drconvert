package com.drconvert.drconvert.domain.usecases.fromto;

import java.util.Optional;

import com.drconvert.drconvert.domain.model.FromTo;

public interface FindFromToByIdUseCase {

  Optional<FromTo> find(Long id);

}
