interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit:(e:React.FormEvent)=>void
}

const InputField = ({ todo, setToDo, handleSubmit }: Props) => {
  return (
    <div className="flex justify-center mb-4">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
        className="mr-2 p-2 border border-gray-300 rounded-md shadow-md outline-none w-96 max-[470px]:w-64"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Task
      </button>
    </form>
  </div>
  );
};
export default InputField;
