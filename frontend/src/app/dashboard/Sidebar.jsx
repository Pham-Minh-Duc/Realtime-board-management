
"use client";

import React from "react";
import { useState } from "react";
import { FaTachometerAlt, FaFolderOpen, FaCalendarAlt, FaUsers, FaFileAlt } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {

    const title = [
        { title: "Dashboard", icon: "FaTachometerAlt", path: "/dashboard" },
        { title: "Cards", icon: "FaFolderOpen", path: "/dashboard/card" },
        { title: "Tasks", icon: "FaUsers", path: "/dashboard/task" },
        { title: "Profile", icon: "FaFileAlt", path: "/dashboard/profile" }
    ]
    const icons = {
        FaTachometerAlt,
        FaFolderOpen,
        FaUsers,
        FaFileAlt
    };


    const [selected, setSelected] = useState(null)

    return (
        <div className="border-b ml-8">
        {title.map((item, index) => (
            <Link href={item.path} key={index}>
                <div 
                    onClick={() => setSelected(index)}
                    className={`mb-1 mt-1 pl-4 pt-2 pb-2 text-sm flex items-center rounded-xl cursor-pointer font-bold
                        ${selected === index ? "bg-blue-100 text-[#669DF1] hover:bg-blue-200" : "bg-white text-gray-600 hover:bg-gray-300"
                        }`}   
                        >
                    <span
                        className="mr-3"
                        >
                        {React.createElement(icons[item.icon])}
                    </span>
                    <span>{item.title}</span>
                </div>
            </Link>
        ))}
        </div>
    )
}