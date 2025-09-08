"use client";

import { useState } from "react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ForgetPassForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function submitForgot(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/forget-pass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await res.json();

    if (res.ok) {
      setSuccess(true);
    } else {
      console.error(json.message || "Error sending reset email");
    }
  }

  return (
    <form className="space-y-6" onSubmit={submitForgot}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email Address
        </label>
        <div className="relative">
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="john@example.com"
          />
          <MdEmail className="absolute left-3 top-4 text-gray-400" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-105"
      >
        <FaPaperPlane />
        Send Reset Link
      </button>

      {success && (
        <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4 mt-4">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-3" />
            <div>
              <h4 className="text-green-800 dark:text-green-200 font-medium">
                Email sent successfully!
              </h4>
              <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                Check your email for password reset instructions.
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ForgetPassForm;
