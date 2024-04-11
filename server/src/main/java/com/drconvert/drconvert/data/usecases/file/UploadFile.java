package com.drconvert.drconvert.data.usecases.file;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.file.UploadFileUseCase;
import com.drconvert.drconvert.infra.repositories.FileRepository;
import com.drconvert.drconvert.infra.repositories.ProjectRepository;

@Service
public class UploadFile implements UploadFileUseCase {

  @Autowired
  private ProjectRepository projectRepository;

  @Autowired
  private FileRepository fileRepository;

  @Override
  public String upload(MultipartFile file, Long projectId) throws Exception {
    String filePath = System.getProperty("user.dir") + "/tmp/" + file.getOriginalFilename();
    File newFile = new File(filePath);
    FileOutputStream fos = new FileOutputStream(newFile);
    fos.write(file.getBytes());
    fos.close();

    com.drconvert.drconvert.domain.model.File f = new com.drconvert.drconvert.domain.model.File();
    f.setFilePath(filePath);
    Optional<Project> project = this.projectRepository.findById(Long.valueOf(projectId));
    f.setProject(project.get());
    this.fileRepository.save(f);

    return filePath;
  }

}
