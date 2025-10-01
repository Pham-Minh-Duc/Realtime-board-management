
"use client";

import React from "react";
import Header from "@/app/dashboard/Header";
import Sidebar from "@/app/dashboard/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


export default function LayoutDashboard({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();

   useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      const syncUser = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/github-login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: session.user.email,
            name: session.user.name,
            avatar: session.user.image,
            providerId: session.user.id,
          }),
        });

        const data = await res.json();
        if (data?.token) {
          localStorage.setItem("accessToken", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("uid", data.user.id);
          router.push("/dashboard");
        }
      };

      syncUser();
    }
  }, [status, session]);

  return (
    <div className="grid grid-cols-5 grid-rows-[50px_1fr] gap-y-12 h-screen">
      <div className="col-span-5 w-full">
        <Header />
      </div>
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <main className="h-full p-6">
          {children}
        </main>
      </div>
    </div>
  );
}