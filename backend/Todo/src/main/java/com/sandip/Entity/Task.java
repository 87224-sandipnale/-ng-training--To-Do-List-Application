package com.sandip.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	 @Column(name = "assigned_to")
	    private String assignedTo;

	    @Column(name = "status")
	    private String status;

	    @Column(name = "due_date")
	    private LocalDate dueDate;

	    @Column(name = "priority")
	    private String priority;

	    @Column(name = "comments")
	    private String comments;

	
	public Task() {
		// TODO Auto-generated constructor stub
	}
	
	
	
}
