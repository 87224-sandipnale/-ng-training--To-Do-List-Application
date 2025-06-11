package com.sandip.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandip.Entity.Task;
import com.sandip.dao.TaskRepository;
import com.sandip.dto.ResourceNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
    }

    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(Long id, Task updatedTask) {
        Task existingTask = getTaskById(id);
        existingTask.setAssignedTo(updatedTask.getAssignedTo());
        existingTask.setStatus(updatedTask.getStatus());
        existingTask.setPriority(updatedTask.getPriority());
        existingTask.setComments(updatedTask.getComments());
        existingTask.setDueDate(updatedTask.getDueDate());
        existingTask.setDescription(updatedTask.getDescription());
        return taskRepository.save(existingTask);
    }

    @Override
    public void deleteTask(Long id) {
        Task task = getTaskById(id);
        taskRepository.delete(task);
    }
}
