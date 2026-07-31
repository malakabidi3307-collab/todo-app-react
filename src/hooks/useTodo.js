import { useState, useEffect } from "react";

function useTodo() {

  // Charger les tâches enregistrées
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Texte du champ input
  const [task, setTask] = useState("");

  // Indice de la tâche en cours de modification
  const [editIndex, setEditIndex] = useState(null);

  // Sauvegarder dans le Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Ajouter une tâche
  function addTask() {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  }

  // Supprimer
  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);

  }

  // Préparer la modification
  function startEdit(index) {
    setTask(tasks[index]);
    setEditIndex(index);

  }

  // Enregistrer la modification
  function updateTask() {
    if (task.trim() === "") return;
    const newTasks = [...tasks];
    newTasks[editIndex] = task;
    setTasks(newTasks);
    setTask("");
    setEditIndex(null);
  }

  return {
    task,
    setTask,
    tasks,
    addTask,
    deleteTask,
    startEdit,
    updateTask,
    editIndex
  };
}
export default useTodo;