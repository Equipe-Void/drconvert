package com.drconvert.drconvert.presentation.controllers.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drconvert.drconvert.data.usecases.user.FindUserByEmail;
import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.infra.security.TokenService;
import com.drconvert.drconvert.presentation.dto.user.AuthResponseDTO;
import com.drconvert.drconvert.presentation.dto.user.AuthenticationDTO;
import com.drconvert.drconvert.presentation.errors.BadRequestException;
import com.drconvert.drconvert.presentation.errors.UserNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AuthController {

  @Autowired
  private FindUserByEmail findUserByEmail;

  @Autowired
  private TokenService tokenService;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @PostMapping("/auth")
  public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthenticationDTO body) {
    User user = this.findUserByEmail.find(body.email()).orElseThrow(UserNotFoundException::new);

    try {
      if (passwordEncoder.matches(body.password(), user.getPassword())) {
        String token = this.tokenService.generateToken(user);
        return ResponseEntity.ok(new AuthResponseDTO(token, user));
      }
      return ResponseEntity.badRequest().build();
    } catch (Exception e) {
      throw new BadRequestException("Erro ao autenticar este usuário");
    }
  }

}
