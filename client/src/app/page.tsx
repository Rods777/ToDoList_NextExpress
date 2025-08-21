import { AddTask } from "./components/AddTask";
import { ToDoList } from "./components/ToDoList";

export default function Home() {
  return (
    <main className="bg-[#02031f] flex items-center justify-center min-h-screen m-0">
      <div className=" flex flex-col gap-5 bg-white w-full max-w-2xl rounded-lg p-10">
        <h1 className="text-2xl font-bold text-center mb-2">To-Do List ni Bok</h1>
        <AddTask/>
        
        {/* Lists of To-Do's */}
        <ToDoList/>
      </div>
    </main>
  );
}
