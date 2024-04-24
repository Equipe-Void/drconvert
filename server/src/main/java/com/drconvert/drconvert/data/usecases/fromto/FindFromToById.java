package com.drconvert.drconvert.data.usecases.fromto;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.FindFromToByIdUseCase;
import com.drconvert.drconvert.infra.repositories.FromToRepository;

@Service
public class FindFromToById implements FindFromToByIdUseCase {

  @Autowired
  private FromToRepository fromToRepository;

  @Override
  public Optional<FromTo> find(Long id) {
    return this.fromToRepository.findById(id);
  }

}
