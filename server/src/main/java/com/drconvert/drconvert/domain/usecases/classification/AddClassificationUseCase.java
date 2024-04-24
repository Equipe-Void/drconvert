package com.drconvert.drconvert.domain.usecases.classification;

import com.drconvert.drconvert.domain.model.Classification;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.presentation.dto.classification.AddClassificationRequestDTO;

public interface AddClassificationUseCase {

  Classification add(AddClassificationRequestDTO data, User user);

}
