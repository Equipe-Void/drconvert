package com.drconvert.drconvert.data.usecases.fromto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.AddFromToUseCase;
import com.drconvert.drconvert.infra.repositories.FromToRepository;

@Service
public class AddFromTo implements AddFromToUseCase {

  @Autowired
  private FromToRepository fromToRepository;

  @Override
  public FromTo add(FromTo fromTo) {
    return this.fromToRepository.save(fromTo);
  }

}
