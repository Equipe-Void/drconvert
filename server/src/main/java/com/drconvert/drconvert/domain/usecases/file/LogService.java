package com.drconvert.drconvert.domain.usecases.file;

import com.drconvert.drconvert.domain.model.User;
import com.drconvert.drconvert.domain.model.Project;
import com.drconvert.drconvert.domain.model.Log;
import com.drconvert.drconvert.infra.repositories.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class LogService {

    @Autowired
    private LogRepository logRepository;

    public void logAction(User user, String action, Project project) {
        Log log = new Log();
        log.setUser(user);
        log.setAction(action);
        log.setProject(project);
        log.setUpdatedAt(LocalDateTime.now());

        logRepository.save(log);
    }
}


