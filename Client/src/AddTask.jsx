import React, { useState } from "react";

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <div>
      <h5>Add a task</h5>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Add New Task"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
