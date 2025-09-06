import { useState } from "react";

function AddTasks({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col gap-4">
      <h1 className="text-3xl text-slate-700 font-bold text-center">
        Gerenciador de Tarefas
      </h1>
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border-slate-300 outline-slate-400 border-2 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border-slate-300 outline-slate-400 border-2 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
          }
          onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTasks;
