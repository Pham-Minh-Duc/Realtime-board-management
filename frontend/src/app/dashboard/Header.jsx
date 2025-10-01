
"use client";

import { IoIosNotificationsOutline  } from "react-icons/io";
import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { RxInfoCircled } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import Input from "@/components/componentTag/input";
import Button from "@/components/componentTag/button";
import UserDropdownModal from "@/components/UserDropdownModal";

export default function Header() {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="flex justify-between mt-2 w-full">
            <div className="flex ml-2 p-2">
                <div className="mr-2 flex justify-center items-center">
                    <AiFillBank />
                </div>
                <span>Trello</span>
            </div>
            <div className="flex">
                <Input 
                    className="mr-2 w-[500px]"
                    placeholder={"Search"} 
                    required={false}   
                />
                <Button label={"Create"}/>
            </div>
            <div className="flex">
                <IoIosNotificationsOutline  className="w-[35px] h-[35px] rounded-xl p-2 hover:bg-gray-300 mr-2"/>
                <RxInfoCircled className="w-[35px] h-[35px] rounded-xl p-2 hover:bg-gray-300 mr-2"/>
                <FaUser
                    onClick={() => setShowModal(!showModal)}
                    className="w-[35px] h-[35px] rounded-xl p-2 hover:bg-gray-300 mr-2"
                />
                {showModal && <UserDropdownModal/>}
            </div>
        </div>
    )
}