import axios from 'axios';

const API_URL = "http://localhost:8080/process";

export const getAllTasks = () => {
    return axios.get(API_URL);
};

export const addTask = (task) => {
    return axios.post(`${API_URL}/addtask`, task);
};

export const updateTask = (task) => {
    return axios.put(API_URL, null, {
        params: { ...task }
    });
};

export const deleteTask = (id) => {
    return axios.delete(API_URL, {
        params: { id }
    });
};
