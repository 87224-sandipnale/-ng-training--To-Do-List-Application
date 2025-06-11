import { useState } from "react";

export default function TaskForm({ task, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    assignedTo: task.assignedTo || "",
    status: task.status || "",
    priority: task.priority || "",
    dueDate: task.dueDate || "",
    comments: task.comments || "",
    description: task.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, ...formData });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded mb-4 bg-gray-50">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          className="border p-2"
          placeholder="Assigned To"
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2"
          placeholder="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2"
          placeholder="Priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2"
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        className="border p-2 w-full mb-4"
        placeholder="Comments"
        name="comments"
        value={formData.comments}
        onChange={handleChange}
      />

      <textarea
        className="border p-2 w-full mb-4"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <div className="flex gap-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded" type="submit">Save</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onCancel} type="button">Cancel</button>
      </div>
    </form>
  );
}
