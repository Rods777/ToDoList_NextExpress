import { FaPlus } from "react-icons/fa";

export const AddTask = () => {
  return (
    <div className="flex w-full gap-2">
        <input 
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 border rounded p-2"
        />
        <button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-800 duration-500">
            Add Task <FaPlus /> 
        </button>
    </div>

  )
}
