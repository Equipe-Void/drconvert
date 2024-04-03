package com.drconvert.drconvert.infra.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.drconvert.drconvert.domain.model.File;

@Repository
public interface FileRepository extends JpaRepository<File, Long> {
}
