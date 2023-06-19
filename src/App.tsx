import { useState } from "react";
import InputField from "./componets/InputField";
import { Todo } from "./Model";
import Task from "./componets/Task";

function App() {
  const [todo, setToDo] = useState("");
  const [allTask, setAllTask] = useState<Todo[]>([]);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setAllTask([...allTask, { id: Date.now(), todo: todo, isDone: false }]);
      setToDo("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="fixed top-0 left-0 right-0 py-4 text-4xl font-bold text-center bg-orange-500 text-white">
        Todo App
      </h1>
      <div className="pt-20 pb-10 max-h-screen overflow-y-auto">
        <InputField todo={todo} setToDo={setToDo} handleSubmit={handleSubmit} />
        <Task allTask={allTask} setAllTask={setAllTask} />
        
      </div>
    </div>
  );
}

export default App;
