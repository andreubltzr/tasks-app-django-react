import axios from 'axios';

const tasksApi = axios.create({
  baseURL: `http://localhost:8000/tasks/api/v1/tasks`,
});

export const getAllTasks = () => tasksApi.get('/');

export const getTask = (id: string | undefined) => tasksApi.get(`/${id}`);

export const createTask = (task: object) => tasksApi.post('/', task);

export const updateTask = (id: string | undefined, task: object) =>
  tasksApi.put(`/${id}/`, task);

export const deleteTask = (id: string | undefined) => tasksApi.delete(`/${id}`);
