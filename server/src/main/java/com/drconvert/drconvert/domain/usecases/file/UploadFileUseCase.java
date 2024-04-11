package com.drconvert.drconvert.domain.usecases.file;

import org.springframework.web.multipart.MultipartFile;

public interface UploadFileUseCase {

  public String upload(MultipartFile file, Long projectId) throws Exception;

}
