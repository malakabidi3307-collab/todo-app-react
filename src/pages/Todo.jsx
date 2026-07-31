import useTodo from "../hooks/useTodo";

function Todo() {
  const {
    task,
    setTask,
    tasks,
    addTask,
    deleteTask,
    startEdit,
    updateTask,
    editIndex,
  } = useTodo();

  return (
    <div className="todo-container">
      <h1> Todo List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Entrer une tâche"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {editIndex === null ? (
          <button onClick={addTask}>Ajouter</button>
        ) : (
          <button onClick={updateTask}>Modifier</button>
        )}
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <div>
              <button onClick={() => startEdit(index)}>✏</button>

              <button onClick={() => deleteTask(index)}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
