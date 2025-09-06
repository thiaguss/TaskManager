import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md">
      <h3 className="text-3xl text-slate-700 font-bold text-center">
        Minhas Tarefas
      </h3>
      <ul className="space-y-4">
        {tasks.map((tasks) => (
          <li key={tasks.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(tasks.id)}
              className={`bg-slate-400 w-full text-white p-2 rounded-md text-left cursor-pointer ${
                tasks.completed && "line-through"
              }`}
            >
              {tasks.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(tasks)}
              className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => onDeleteTask(tasks.id)}
              className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
