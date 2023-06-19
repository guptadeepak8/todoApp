import { useEffect, useRef, useState } from "react";
import { Todo } from "../Model";

interface Props {
  allTask: Todo[];
  todo: Todo;
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Singletodo = ({ allTask, todo, setAllTask }: Props) => {
  const [edit, setEdit] = useState<string>(todo.todo);
  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const inputRef=useRef<HTMLInputElement>(null)

useEffect(()=>{
  inputRef.current?.focus();
},[enableEdit])

  const handleDelete = (id: number) => {
    setAllTask(allTask.filter((prop: Todo) => prop.id !== id));
  };

  const handleCheck = (id: number, Check: boolean) => {
    setAllTask(
      allTask.map((todo: Todo) =>
        todo.id === id ? { ...todo, isDone: !Check } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setAllTask(
      allTask.map((t: Todo) =>
        t.id === todo.id ? { ...t, todo: edit } : t
      )
    );
    setEnableEdit(false);
  };

  return (
    <div className="mb-2 bg-orange-200 px-5 py-3 rounded-2xl ">
    {enableEdit ? (
      <form onSubmit={handleEdit} className="flex items-center">
        <input
        ref={inputRef}
          type="text"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-300 text-white rounded-md"
        >
          Save
        </button>
      </form>
    ) : (
      <div className="flex items-center justify-between ">
        <div>
        {todo.isDone ? (
          <h3
            style={{ textDecoration: "line-through" }}
            className="mb-2 mr-2 "
          >
            {todo.todo}
          </h3>
        ) : (
          <h3 className="mb-2 mr-2 text-xl">{todo.todo}</h3>
        )}
        </div>
        <div>
        {!todo.isDone && (
          <button
            onClick={() => setEnableEdit(true)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => handleDelete(todo.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
        >
          Delete
        </button>
        <button
          onClick={() => handleCheck(todo.id, todo.isDone)}
          className="px-4 py-2 bg-green-400 text-white rounded-md"
        >
          {todo.isDone?"UNDO":"Check"}
        </button>
        </div>
      </div>
    )}
  </div>
  );
};

export default Singletodo;
