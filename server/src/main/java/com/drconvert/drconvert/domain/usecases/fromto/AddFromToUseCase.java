package com.drconvert.drconvert.domain.usecases.fromto;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.presentation.dto.fromto.AddFromToRequestDTO;

public interface AddFromToUseCase {

  FromTo add(AddFromToRequestDTO data, Classification classification);

}
