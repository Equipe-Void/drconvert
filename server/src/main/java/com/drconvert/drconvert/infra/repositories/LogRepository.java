package com.drconvert.drconvert.infra.repositories;

import com.drconvert.drconvert.domain.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long> {
}
