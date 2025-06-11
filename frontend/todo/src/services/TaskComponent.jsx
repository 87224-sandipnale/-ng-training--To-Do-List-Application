import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskComponent() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tasks', {
        params: {
          page: page,
          size: 5,
        },
      });
      setTasks(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [page]);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.description}</strong> — {task.assignedTo} — {task.status}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </button>

        <span style={{ margin: '0 10px' }}>
          Page {page + 1} of {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev))}
          disabled={page + 1 >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TaskComponent;
