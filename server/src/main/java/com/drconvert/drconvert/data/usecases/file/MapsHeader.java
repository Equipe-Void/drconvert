package com.drconvert.drconvert.data.usecases.file;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.List;

import org.springframework.stereotype.Service;

import com.drconvert.drconvert.domain.usecases.file.MapsHeaderUseCase;
import com.drconvert.drconvert.presentation.errors.BadRequestException;

@Service
public class MapsHeader implements MapsHeaderUseCase {

  @Override
  public List<String> maps(String filePath, String separator) throws Exception {
    BufferedReader reader = new BufferedReader(new FileReader(filePath));
    StringBuilder sb = new StringBuilder();
    String line = reader.readLine();
    reader.close();

    while (line != null) {
      sb.append(line);
      break;
    }

    if (sb.toString().trim().length() == 0) {
      throw new BadRequestException("O arquivo não possui linhas");
    }

    List<String> header = List.of(sb.toString().split(separator));

    return header;
  }

}
