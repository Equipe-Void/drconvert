package com.drconvert.drconvert.domain.usecases.file;

import org.springframework.web.multipart.MultipartFile;

public interface UploadFileUseCase {

  public void upload(MultipartFile file) throws Exception;

}
