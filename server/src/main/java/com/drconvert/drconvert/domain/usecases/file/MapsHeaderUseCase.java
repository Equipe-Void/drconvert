package com.drconvert.drconvert.domain.usecases.file;

import java.util.List;

public interface MapsHeaderUseCase {
  
  public List<String> maps(String filePath, String separator) throws Exception;

}
