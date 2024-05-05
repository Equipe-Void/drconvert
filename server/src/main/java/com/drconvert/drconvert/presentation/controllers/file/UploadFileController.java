package com.drconvert.drconvert.presentation.controllers.file;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.file.MapsHeaderUseCase;
import com.drconvert.drconvert.domain.usecases.file.UploadFileUseCase;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/files")
public class UploadFileController {

  @Autowired
  private UploadFileUseCase uploadFile;

  @Autowired
  private MapsHeaderUseCase mapsHeader;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @PostMapping("/upload")
  public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,
      @RequestParam("projectId") Long projectId, @RequestParam String separator, @RequestParam String hasHeader) {
    if (file.isEmpty()) {
      throw new BadRequestException("Um arquivo .csv precisa ser enviado");
    }

    Optional<Project> projectExists = this.findProjectById.find(projectId);

    if(projectExists.isEmpty()) {
      throw new ProjectNotFoundException();
    }

    try {
      String filePath = this.uploadFile.upload(file, Long.valueOf(projectId), Boolean.valueOf(hasHeader), projectExists.get());

      List<String> headers = this.mapsHeader.maps(filePath, separator);

      return ResponseEntity.status(201).body(headers);
    } catch (Exception e) {
      throw new BadRequestException("Erro ao fazer upload deste arquivo");
    }
  }

}
