package com.sandip.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sandip.Entity.Task;

public interface ProcessDao extends JpaRepository<Task, Long> {

}
