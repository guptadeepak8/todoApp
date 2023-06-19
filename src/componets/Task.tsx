import { Todo } from "../Model";
import Singletodo from "./Singletodo";

interface Props {
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Task = ({ allTask, setAllTask }: Props) => {
  return (
    <div className="flex justify-center">
    <div className="w-full max-w-lg">
      {allTask.map((todo: Todo) => (
        <Singletodo
          todo={todo}
          key={todo.id}
          allTask={allTask}
          setAllTask={setAllTask}
        />
      ))}
    </div>
  </div>
  );
};

export default Task;
