package com.drconvert.drconvert.presentation.controllers.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.usecases.file.UploadFileUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

@RestController
@RequestMapping("/api/files")
public class UploadFileController {

  @Autowired
  private UploadFileUseCase uploadFile;

  @PostMapping("/upload")
  public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
    if (file.isEmpty()) {
      throw new BadRequestException("Um arquivo .csv precisa ser enviado");
    }

    try {
      this.uploadFile.upload(file);

      return ResponseEntity.status(201).build();
    } catch (Exception e) {
      throw new BadRequestException();
    }

  }
}
