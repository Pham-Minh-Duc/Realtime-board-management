import { useDrop } from "react-dnd";
import DraggableTask from "./DraggableTask";

export default function DropColumn({ status, tasks, onDrop }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`bg-blue-100 p-2 rounded min-h-[100px] ${isOver ? "bg-blue-200" : ""}`}
    >
      <h2 className="text-center font-bold mb-2">{status}</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <DraggableTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}