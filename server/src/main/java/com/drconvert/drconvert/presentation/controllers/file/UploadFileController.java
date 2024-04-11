package com.drconvert.drconvert.presentation.controllers.file;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.usecases.file.MapsHeaderUseCase;
import com.drconvert.drconvert.domain.usecases.file.UploadFileUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

@RestController
@RequestMapping("/api/files")
public class UploadFileController {

  @Autowired
  private UploadFileUseCase uploadFile;

  @Autowired
  private MapsHeaderUseCase mapsHeader;

  @PostMapping("/upload")
  public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,
      @RequestParam("projectId") Long projectId, @RequestParam String separator) {
    if (file.isEmpty()) {
      throw new BadRequestException("Um arquivo .csv precisa ser enviado");
    }

    try {
      String filePath = this.uploadFile.upload(file, Long.valueOf(projectId));

      List<String> headers = this.mapsHeader.maps(filePath, separator);

      return ResponseEntity.status(201).body(headers);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao fazer upload deste arquivo");
    }
  }

}
