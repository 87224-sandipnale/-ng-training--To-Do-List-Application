package com.sandip.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sandip.Entity.Task;
import com.sandip.service.ProcessService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/process")
public class ProcessController {
	
	@Autowired
	private ProcessService processService;

	@GetMapping
	public ResponseEntity<?>Viewtask(){
		return ResponseEntity.ok( processService.getAllTask());
		
	}
	
	@PostMapping("/addtask")
	public ResponseEntity<?>addTask(@org.springframework.web.bind.annotation.RequestBody Task s) {
		
	
		return ResponseEntity.ok(processService.addTask(s));
	}
	
	@PutMapping()
	public ResponseEntity<?>Edittask(@RequestParam Task t){
		return ResponseEntity.ok( processService.Edit(t));
		
	}
	@DeleteMapping
	public ResponseEntity<?>Deletetask( @RequestParam Long id){
		return ResponseEntity.ok(processService.delete(id));
	}
	
	
	
	
}
