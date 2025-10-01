"use client";

import { useEffect, useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";

export default function UserDropdownModal() {
  const { data: session } = useSession();
  const [localUser, setLocalUser] = useState(null);

  // Lấy user từ localStorage khi dùng email/password
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setLocalUser(JSON.parse(storedUser));
    }
  }, []);

  // Xác định user đang đăng nhập
  const user = session?.user || localUser;
  const isLoggedIn = !!user;

  const handleSignOut = () => {
    const cf = confirm("Are you sure want to exit ?");
    if (cf) {
      if (session) {
        // Nếu login bằng GitHub (NextAuth)
        signOut({ callbackUrl: "/auth/signin" });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        localStorage.removeItem("uid");
      } else {
        // Nếu login bằng email/password
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        localStorage.removeItem("uid");
        setLocalUser(null);
        window.location.href = "/auth/signin";
      }
    }
  };

  const handleSignIn = () => {
    // Điều hướng về trang signin của bạn
    window.location.href = "/auth/signin";
  };

  return (
    <div className="absolute right-2 top-[60px] bg-white shadow-lg rounded-lg w-[200px] z-50 p-4">
      <p className="font-semibold mb-2">Tài khoản</p>
      <ul className="space-y-2 text-sm">
        {isLoggedIn && (
          <li className="text-gray-700">Xin chào, {user?.name}</li>
        )}
        <li className="hover:text-blue-500 cursor-pointer">Thông tin cá nhân</li>
        <li className="hover:text-blue-500 cursor-pointer">Cài đặt</li>
        {isLoggedIn ? (
          <li
            onClick={handleSignOut}
            className="hover:text-red-500 cursor-pointer"
          >
            Đăng xuất
          </li>
        ) : (
          <li
            onClick={handleSignIn}
            className="hover:text-green-500 cursor-pointer"
          >
            Đăng nhập
          </li>
        )}
      </ul>
    </div>
  );
}
