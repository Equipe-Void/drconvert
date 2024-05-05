package com.drconvert.drconvert.infra.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.drconvert.drconvert.domain.model.Classification;

@Repository
public interface ClassificationRepository extends JpaRepository<Classification, Long> {

  @Query("SELECT c FROM Classification c WHERE c.user.id = :id")
  public List<Classification> findAllClassificationByUserId(@Param("id") Long id);

}