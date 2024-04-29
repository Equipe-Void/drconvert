package com.drconvert.drconvert.domain.usecases.fromto;

import java.util.List;

import com.drconvert.drconvert.domain.model.FromTo;

public interface FindAllFromToUseCase {

  List<FromTo> findAll();

}
