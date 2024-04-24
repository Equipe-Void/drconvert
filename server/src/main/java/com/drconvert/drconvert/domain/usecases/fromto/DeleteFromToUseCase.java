package com.drconvert.drconvert.domain.usecases.fromto;

import com.drconvert.drconvert.presentation.errors.NotFoundException;

public interface DeleteFromToUseCase {

  void delete(Long id) throws NotFoundException;

}
