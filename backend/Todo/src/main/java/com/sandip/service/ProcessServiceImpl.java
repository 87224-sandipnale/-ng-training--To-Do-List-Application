package com.sandip.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandip.Entity.Task;
import com.sandip.dao.ProcessDao;

import jakarta.transaction.Transactional;
@Transactional
@Service

public class ProcessServiceImpl implements ProcessService {

	@Autowired
	private ProcessDao processdao;
	@Override
	public List<Task> getAllTask() {
		// TODO Auto-generated method stub
		return processdao.findAll();
	}
	@Override
	public Task addTask(Task t1) {
		// TODO Auto-generated method stub
		return processdao.saveAndFlush(t1);
	}
	@Override
	public Task Edit(Task t) {
		
		return processdao.save(t);
	}
	@Override
	public Task delete(Long id) {
		// TODO Auto-generated method stub
		processdao.deleteById(id);
		return null;
	}




}
