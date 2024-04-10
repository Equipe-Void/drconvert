package com.drconvert.drconvert.presentation.controllers.field;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.domain.model.Field;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.usecases.field.AddFieldUseCase;
import com.drconvert.drconvert.domain.usecases.project.FindProjectByIdUseCase;
import com.drconvert.drconvert.presentation.dto.AddFieldRequestDTO;
import com.drconvert.drconvert.presentation.errors.ProjectNotFoundException;

@RestController
@RequestMapping("/api")
public class AddFieldController {
  
  @Autowired
  private AddFieldUseCase addField;

  @Autowired
  private FindProjectByIdUseCase findProjectById;

  @PostMapping("/fields")
  public ResponseEntity<Field> addField(@RequestBody @Validated AddFieldRequestDTO data) {
    // Obtém o campo do corpo da requisição
    Field field = data.field();

    // Verifica se o projeto associado ao campo existe
    Project project = findProjectById.find(Long.valueOf(field.getProject().getId()))
      .orElseThrow(ProjectNotFoundException::new);

    // Cria um novo objeto Field com os dados recebidos
    Field newField = new Field();
    newField.setName(field.getName());
    newField.setProject(project);
    newField.setType(field.getType());
    
    // Adiciona o campo ao banco de dados
    Field addedField = addField.add(newField);

    // Retorna o campo adicionado com a resposta HTTP
    return ResponseEntity.status(201).body(addedField);
  }
}