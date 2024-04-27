package com.drconvert.drconvert.domain.usecases.classification;

import com.drconvert.drconvert.domain.model.Classification;
import org.springframework.stereotype.Service;

@Service
public class UpdateClassificationUseCase {

    public Classification update(Long classificationId, Classification updatedClassification) {
        
        return updatedClassification;
    }
}
