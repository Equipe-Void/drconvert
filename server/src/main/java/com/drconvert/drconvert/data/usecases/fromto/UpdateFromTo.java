package com.drconvert.drconvert.data.usecases.fromto;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.domain.usecases.fromto.UpdateFromToUseCase;
import com.drconvert.drconvert.infra.repositories.FromToRepository;
import com.drconvert.drconvert.presentation.dto.fromto.UpdateFromToRequestDTO;

@Service
public class UpdateFromTo implements UpdateFromToUseCase {

  @Autowired
  private FromToRepository fromToRepository;

  @Override
  public FromTo update(UpdateFromToRequestDTO data) {
    Optional<FromTo> fromTo = fromToRepository.findById(data.id());

    fromTo.get().setInput(data.input());
    fromTo.get().setOutput(data.output());

    return this.fromToRepository.save(fromTo.get());
  }

}