"use client";

import { useParams } from "next/navigation";
import { TbXboxX } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Input from "@/components/componentTag/input";
import Button from "@/components/componentTag/button";
import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableTask from "@/components/DraggableTask";
import DropColumn from "@/components/DropColumn";
import taskService from "@/services/taskService";

export default function CardDetailPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const statuses = ["Icebox", "Backlog", "Ongoing", "Review", "Done"];

  const router = useRouter();
  const params = useParams();
  const cardId = params.id;
  const taskCount = tasks.length;

  // 🔹 Load tasks theo cardId
  useEffect(() => {
    if (!cardId) return;
    taskService
      .getByCard(cardId)
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error loading tasks:", err));
  }, [cardId]);

  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) return;

    try {
      const newTask = await taskService.add(cardId, {
        title: newTaskTitle,
        status: "Icebox" // ✅ gán mặc định để task hiển thị
      });

      setTasks((prev) => [...prev, newTask]);
      setNewTaskTitle("");
      setIsFocused(false);
      console.log("New task:", newTaskTitle);
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const handleDrop = async (taskId, newStatus) => {
    try {
      await taskService.update(cardId, taskId, { status: newStatus });

      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (err) {
      console.error("Error updating task status:", err);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 h-full">
        {/* Header */}
        <div className="flex flex-rows justify-between">
          <h1 className="text-xl font-bold mb-4">Detail Card #{cardId}</h1>
          <TbXboxX
            onClick={() => router.push("/dashboard/card")}
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </div>

        {/* Layout */}
        <div className="flex flex-rows w-full h-full gap-3">
          {/* Left Sidebar */}
          <div className="bg-blue-300 w-1/4 h-full rounded-lg">
            <Input
              placeholder="Add a new task"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(true)}
              className="m-1"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              required
            />
            {isFocused && (
              <div className="bg-gray-200 mt-1 rounded-lg h-[40px] flex items-center m-1">
                <Button
                  label="Add Task"
                  onClick={handleAddTask}
                  className="ml-2 mr-2 w-[78px] h-[30px] text-[10px] font-bold"
                />
                <Button
                  label="Cancel"
                  onClick={() => setIsFocused(false)}
                  className="w-[78px] h-[30px] text-[10px] font-bold bg-gray-200 !text-black hover:bg-gray-300"
                />
              </div>
            )}

            {/* Danh sách task (chưa kéo thả) */}
            <div className="mt-1">
              {tasks.map((task) => (
                <DraggableTask key={task.id} task={task} />
              ))}
            </div>
          </div>

          {/* Board với các column */}
          <div className="bg-gray-300 w-3/4 h-full">
            <div className="grid grid-cols-5 gap-4 w-full h-full p-4 bg-white rounded-lg">
              {statuses.map((status) => (
                <DropColumn
                  key={status}
                  status={status}
                  tasks={tasks.filter((task) => task.status === status)}
                  onDrop={handleDrop}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
