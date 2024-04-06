package com.drconvert.drconvert.presentation.controllers.file;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.model.File;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.file.MapsHeaderUseCase;
import com.drconvert.drconvert.domain.usecases.file.UploadFileUseCase;
import com.drconvert.drconvert.infra.repositories.FileRepository;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

@RestController
@RequestMapping("/api/files")
public class UploadFileController {

  @Autowired
  private UploadFileUseCase uploadFile;

  @Autowired
  private MapsHeaderUseCase mapsHeader;

  @Autowired
  private FileRepository fileRepository;

  @Autowired
  private ProjectRepository projectRepository;

  @PostMapping("/upload")
  public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,
      @RequestParam("projectId") Long projectId) {
    if (file.isEmpty()) {
      throw new BadRequestException("Um arquivo .csv precisa ser enviado");
    }

    try {
      String filePath = this.uploadFile.upload(file);
      File f = new File();
      f.setFilePath(filePath);
      Optional<Project> project = projectRepository.findById(Long.valueOf(projectId));
      f.setProject(project.get());
      this.fileRepository.save(f);

      List<String> headers = this.mapsHeader.maps(filePath, ",");

      return ResponseEntity.status(201).body(headers);
    } catch (Exception e) {
      throw new BadRequestException();
    }
  }

}
