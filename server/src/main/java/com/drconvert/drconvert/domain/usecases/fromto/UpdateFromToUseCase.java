package com.drconvert.drconvert.domain.usecases.fromto;

import com.drconvert.drconvert.domain.model.FromTo;
import com.drconvert.drconvert.presentation.dto.fromto.UpdateFromToRequestDTO;

public interface UpdateFromToUseCase {

  FromTo update(UpdateFromToRequestDTO data);

}
