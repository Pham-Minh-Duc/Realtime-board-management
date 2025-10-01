import { useDrag } from "react-dnd";

export default function DraggableTask({ task }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white p-2 rounded shadow m-1 cursor-move ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {task.title} - {task.status}
    </div>
  );
}