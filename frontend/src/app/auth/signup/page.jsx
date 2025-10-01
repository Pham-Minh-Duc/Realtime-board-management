"use client";
import React, { useState } from "react";
import Input from "@/components/componentTag/input";
import Button from "@/components/componentTag/button";
import authService from "@/services/authService";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: form.email,
        name: `${form.firstName} ${form.lastName}`,
        password: form.password,
      };

      const res = await authService.signup(payload);
      console.log("Sign up success:", res);

      alert("Đăng ký thành công!");
      router.push("/auth/signin"); // 👉 chuyển sang trang đăng nhập
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.error || "Đăng ký thất bại!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="grid place-items-center justify-center pt-20 w-[350px]"
      >
        <header className="text-2xl mb-4 font-semibold">Sign Up</header>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <Input
          type="email"
          label="Email"
          placeholder="Email"
          className="mb-3 w-full"
          required={true}
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <div className="w-full flex gap-2 mb-3">
          <Input
            type="text"
            placeholder="First Name"
            className="w-full"
            label="First Name"
            required={true}
            value={form.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            className="w-full"
            label="Last Name"
            required={true}
            value={form.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>

        <Input
          type="password"
          label="Password"
          placeholder="Password"
          className="mb-3 w-full"
          required={true}
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <div className="w-full flex flex-row items-center">
          <Button label="Sign Up" className="w-full mt-4 mr-2" type="submit" />
        </div>

        <div className="flex gap-2 mt-4">
          <p>Already have an account?</p>
          <a href="/auth/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
}
