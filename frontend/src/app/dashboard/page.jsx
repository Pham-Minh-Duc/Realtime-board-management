"use client"

import { useEffect } from "react"

export default function DashBoardPage() {
  useEffect(() => {
  const fetchSession = async () => {
    const sessionRes = await fetch("/api/auth/session");
    const session = await sessionRes.json();
    console.log("Session sau khi đăng nhập:", session);
  };

  fetchSession();
}, []);
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Cards</h1>
      <p>Đây là nội dung của tab dashboard.</p>
    </div>
  );
}