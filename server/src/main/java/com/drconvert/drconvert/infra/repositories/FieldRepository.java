package com.drconvert.drconvert.infra.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.drconvert.drconvert.domain.model.Field;

@Repository
public interface FieldRepository extends JpaRepository<Field, Long> {

  @Query("SELECT f FROM Field f WHERE (f.project.id = :projectId and f.isIdentifier = true)")
  public List<Field> findAllByProjectIdAndIsIdentifier(@Param("projectId") Long projectId);

}
