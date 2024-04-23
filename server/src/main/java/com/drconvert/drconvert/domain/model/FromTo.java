package com.drconvert.drconvert.domain.model;

import jakarta.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;
import lombok.Data;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class FromTo {
  @EqualsAndHashCode.Include
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", updatable = false, unique = true, nullable = false)
  private Long id;

  @Column(name = "input", nullable = false)
  private String input;

  @Column(name = "output", nullable = false)
  private String output;

  @JsonIgnore
  @ManyToOne
  @JoinColumn(name = "classification_id", nullable = false, updatable = false)
  private Classification classification;

}
