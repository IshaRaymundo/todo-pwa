import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState("");

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    const tareaNueva = {
      id: Date.now(),
      texto: nuevaTarea,
    };
    setTareas([...tareas, tareaNueva]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasFiltradas);
  };

  return (
    <div className="App">
      <h1>📝 Lista de Tareas</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul className="task-list">
        {tareas.length === 0 ? (
          <p>No hay tareas pendientes 🎉</p>
        ) : (
          tareas.map((tarea) => (
            <li key={tarea.id}>
              <span>{tarea.texto}</span>
              <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
