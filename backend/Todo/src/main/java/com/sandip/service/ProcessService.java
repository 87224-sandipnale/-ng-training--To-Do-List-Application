package com.sandip.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.sandip.Entity.Task;

public interface ProcessService {

	public  List <Task>getAllTask();

	public Task addTask(Task t);

	public Task Edit(Task t);

	public Task delete(Long id); 
	
	
}
