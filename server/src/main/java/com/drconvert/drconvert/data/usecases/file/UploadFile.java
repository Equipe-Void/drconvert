package com.drconvert.drconvert.data.usecases.file;


import java.io.File;
import java.io.FileOutputStream;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.usecases.file.UploadFileUseCase;

@Service
public class UploadFile implements UploadFileUseCase {

  @Override
  public String upload(MultipartFile file) throws Exception {
    String filePath = System.getProperty("user.dir") + "/tmp/" + file.getOriginalFilename();
    File newFile = new File(filePath);
    FileOutputStream fos = new FileOutputStream(newFile);
    fos.write(file.getBytes());
    fos.close();

    return filePath;
  }

}
