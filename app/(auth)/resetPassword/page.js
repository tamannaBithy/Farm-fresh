"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params.get("token");
  const email = params.get("email");
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = async ({ password, confirmPassword }) => {
    if (password !== confirmPassword) return alert("Passwords do not match");
    const res = await fetch("/api/auth/reset-pass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
    const json = await res.json();
    if (res.ok) {
      alert("Password updated — please sign in");
      router.push("/login");
    } else {
      alert(json.message || "Error");
    }
  };

  if (!token || !email) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Invalid Link
          </h2>
          <p className="text-gray-600">
            The password reset link is invalid or has expired.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Reset Your Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="New password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
          >
            Set New Password
          </button>
        </form>
      </div>
    </div>
  );
}
