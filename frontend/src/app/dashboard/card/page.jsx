
"use client";

import Button from "@/components/componentTag/button";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/app/api/apiConfig";
import API from "@/app/api/api";

export default function CardPage() {

    const router = useRouter();

    const [showAddModal, setShowAddModal] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [cards, setCards] = useState([]);

    const handleCreateCard = () => {
        setShowAddModal(true);
    }

// Lấy danh sách card của user
const fetchCards = async () => {
  try {
    const uid = localStorage.getItem("uid");
    console.log("UID:", uid);

    if (!uid) return;

    const res = await apiClient.get(API.cards.byUser(uid));
    console.log("API response:", res.data);
    setCards(res.data);
  } catch (err) {
    console.error("Lỗi lấy danh sách card:", err);
  }
};

  // Thêm card mới
  const handleAddCard = async () => {
    const uid = localStorage.getItem("uid");

    if (newTitle.trim() === "") return;

    try {
      await apiClient.post(API.cards.add, {
        name: newTitle,
        description: null,
        ownerId: uid
      });
      setNewTitle("");
      setShowAddModal(false);
      fetchCards();
    } catch (err) {
      console.error("Lỗi thêm card:", err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="p-4 h-full flex flex-col border rounded-lg">
        <div className="flex justify-end mb-2">
            <Button 
                label={"+ Card"}
                onClick={handleCreateCard}
                className={"w-[81px] h-[30px] flex justify-center items-center"}
            />
        </div>
        <div className="grid lg:grid-cols-3 gap-2">
            {cards.map((card) => (
                <div 
                    key={card.id}
                    className="grid grid-cols-[3fr_1fr] bg-blue-200 rounded-lg p-2"    
                >
                    <div className="mr-2">
                        <div className="flex flex-rows">
                            <p>Name:</p>
                            <h2>{card.name}</h2>
                        </div>
                        <div className="flex flex-rows">
                            <p>Number of tasks:</p>
                            <p>{card.countTasks}</p>
                        </div>
                    </div>
                    <Button 
                        label={"detail"}
                        onClick={() => router.push(`/dashboard/card/${card.id}`)}
                        className="w-[75px] h-[30px] flex justify-center items-center"    
                    /> 
                </div>
            ))}
        </div>


        {showAddModal && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[300px] space-y-4">
            <h2 className="text-lg font-bold">Nhập tên Card</h2>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Tên card..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Hủy
              </button>
              <button
                onClick={handleAddCard}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}