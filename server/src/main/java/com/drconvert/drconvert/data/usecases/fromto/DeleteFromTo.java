package com.drconvert.drconvert.data.usecases.fromto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.usecases.fromto.DeleteFromToUseCase;
import com.drconvert.drconvert.infra.repositories.FromToRepository;
import com.drconvert.drconvert.presentation.errors.NotFoundException;

@Service
public class DeleteFromTo implements DeleteFromToUseCase {

  @Autowired
  private FromToRepository fromToRepository;

  @Override
  public void delete(Long id) throws NotFoundException {

    fromToRepository.deleteById(id);
  }

}
