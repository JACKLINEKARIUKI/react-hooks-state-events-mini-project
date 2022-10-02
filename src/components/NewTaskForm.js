import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const newCategories = categories.slice(1);
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: "",
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value=""></option>
          {newCategories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
