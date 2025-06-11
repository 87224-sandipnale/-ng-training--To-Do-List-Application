export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Assigned To</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Priority</th>
          <th className="border p-2">Due Date</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className="border p-2">{task.assignedTo}</td>
            <td className="border p-2">{task.status}</td>
            <td className="border p-2">{task.priority}</td>
            <td className="border p-2">{task.dueDate}</td>
            <td className="border p-2 space-x-2">
              <button className="px-2 py-1 bg-yellow-300 rounded" onClick={() => onEdit(task)}>
                Edit
              </button>
              <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => onDelete(task.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
