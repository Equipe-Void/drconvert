package com.drconvert.drconvert.infra.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.drconvert.drconvert.domain.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

  @Query("SELECT p FROM Project p WHERE p.user.id = :id")
  public List<Project> findAllProjectsByUserId(@Param("id") Long id);

  @Query("SELECT p FROM Project p WHERE "
       + "(:name IS NULL OR p.name LIKE %:name%) AND "
       + "(:date IS NULL OR p.date = :date) AND "
       + "(:user IS NULL OR p.user.username = :user)") 
  public List<Project> findByNameAndDateAndUser(
      @Param("name") String name,
      @Param("date") String date,
      @Param("user") String user);
}
