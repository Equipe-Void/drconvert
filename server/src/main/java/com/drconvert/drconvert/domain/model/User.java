package com.drconvert.drconvert.domain.model;

import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import lombok.Data;
import lombok.EqualsAndHashCode;

import com.drconvert.drconvert.domain.enums.UserType;
import com.drconvert.drconvert.domain.enums.Permission;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class User {
  
  @EqualsAndHashCode.Include
  @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, unique = true, nullable = false)
	private Long id;

  @Column(name = "user_type", columnDefinition="varchar(15) default 'COMMON'")
  private UserType userType;

  @Column(nullable = false, name = "name")
  private String name;

  @Column(name = "permissions", columnDefinition="varchar(100) default 'CREATE_PROJECT,READ'")
  private Permission[] permissions;

  @Column(name = "email", unique = true, nullable = false)
  private String email;

  @Column(name = "password", unique = true, nullable = false)
  private String password;

}
