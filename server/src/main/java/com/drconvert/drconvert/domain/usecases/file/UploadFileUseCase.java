package com.drconvert.drconvert.domain.usecases.file;

import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.model.Project;

public interface UploadFileUseCase {

  public String upload(MultipartFile file, Long projectId, Boolean hasHeaders, Project project) throws Exception;

}
