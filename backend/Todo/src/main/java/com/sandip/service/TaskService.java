package com.sandip.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.sandip.Entity.Task;

public interface TaskService {
    List<Task> getAllTasks();
    Task getTaskById(Long id);
    Task createTask(Task task);
    Task updateTask(Long id, Task task);
    void deleteTask(Long id);
}

