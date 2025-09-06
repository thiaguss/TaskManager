import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className=" text-slate-100 cursor-pointer absolute left-0 top-0 bottom-0 mb-6"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col">
          <h2 className="text-xl text-slate-700 font-bold">{title}</h2>
          <p className="text-slate-700">{description} </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
