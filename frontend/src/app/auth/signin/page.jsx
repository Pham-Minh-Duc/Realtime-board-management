
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn as githubSignIn } from "next-auth/react";

import Input from "@/components/componentTag/input";
import Button from "@/components/componentTag/button";
import { FaGithub } from "react-icons/fa";
import authService from "@/services/authService";

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Cập nhật giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Đăng nhập bằng email/password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await authService.signin(form);

      if (result) {
        // Lưu token + user vào localStorage
        localStorage.setItem("accessToken", result.token);
        localStorage.setItem("uid", result.user.id);
        localStorage.setItem("user", JSON.stringify(result.user));
        // console.log(result.user.id);

        alert(`Đăng nhập thành công! Xin chào ${result.user.name}`);
        setTimeout(() => {
          router.push("/dashboard");
        }, 100);
      }
    } catch (err) {
      console.error("Signin error:", err);
      setError(err.response?.data?.error || "Đăng nhập thất bại!");
    }
  };
const handleGithubLogin = async () => {
  const result = await githubSignIn("github"); // redirect đến GitHub
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="grid place-items-center justify-center pt-20 w-96"
      >
        <header className="text-2xl mb-4 font-semibold">Sign In</header>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="mb-3 w-full"
          required
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full"
          required
          value={form.password}
          onChange={handleChange}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="w-full flex flex-row items-center">
          <Button
            label="Sign In"
            className="w-full mt-4 mr-2"
            type="submit"
          />
          <Button
            label={<FaGithub size={20} />}
            className="mt-4"
            onClick={handleGithubLogin}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <p>Don't have an account?</p>
          <a href="/auth/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}


