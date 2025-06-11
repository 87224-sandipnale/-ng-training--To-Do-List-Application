import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import api from "./api";
import Pagination from "./components/Pagination";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    fetchTasks();
  }, [page, searchQuery]);

  const fetchTasks = async () => {
    const res = await api.get(`?page=${page}&size=${size}`);
    setTasks(res.data);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(0); // Reset to first page when searching
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete this task?")) {
      await api.delete(`/${id}`);
      fetchTasks();
    }
  };

  const handleSave = async (task) => {
    if (task.id) {
      await api.put(`/${task.id}`, task);
    } else {
      await api.post("", task);
    }
    setEditingTask(null);
    fetchTasks();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Task Management</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 w-full"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setEditingTask({})}
        >
          New Task
        </button>
      </div>

      {editingTask && (
        <TaskForm task={editingTask} onSave={handleSave} onCancel={() => setEditingTask(null)} />
      )}

      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />

      <div className="flex justify-between mt-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
