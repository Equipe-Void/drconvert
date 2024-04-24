package com.drconvert.drconvert.data.usecases.fromto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.AddFromToUseCase;
import com.drconvert.drconvert.infra.repositories.FromToRepository;
import com.drconvert.drconvert.presentation.dto.fromto.AddFromToRequestDTO;

@Service
public class AddFromTo implements AddFromToUseCase {

  @Autowired
  private FromToRepository fromToRepository;

  @Override
  public FromTo add(AddFromToRequestDTO data, Classification classification) {
    FromTo fromTo = new FromTo();
    fromTo.setInput(data.input());
    fromTo.setOutput(data.output());
    fromTo.setClassification(classification);
    return this.fromToRepository.save(fromTo);
  }

}
