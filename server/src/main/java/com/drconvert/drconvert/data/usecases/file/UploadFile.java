package com.drconvert.drconvert.data.usecases.file;

import java.io.File;
import java.io.FileOutputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.usecases.file.UploadFileUseCase;

@Service
public class UploadFile implements UploadFileUseCase {

  @Override
  public void upload(MultipartFile file) throws Exception {
    String filePath = System.getProperty("user.dir") + "/tmp/" + file.getOriginalFilename();

    System.out.println(filePath);

    File newFile = new File(filePath);
    FileOutputStream fos = new FileOutputStream(newFile);
    fos.write(file.getBytes());
    fos.close();
  }

}
