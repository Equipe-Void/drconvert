package com.drconvert.drconvert.data.usecases.fromto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.FindAllFromToUseCase;
import com.drconvert.drconvert.infra.repositories.FromToRepository;

@Service
public class FindAllFromTo implements FindAllFromToUseCase {

  @Autowired
  private FromToRepository fromToRepository;

  @Override
  public List<FromTo> findAll() {
    return this.fromToRepository.findAll();
  }

}
