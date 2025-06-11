package com.sandip.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sandip.Entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
	@Query("SELECT t FROM Task t WHERE LOWER(t.assignedTo) LIKE LOWER(CONCAT('%', :query, '%'))")
	List<Task> searchTasks(@Param("query") String query);
}