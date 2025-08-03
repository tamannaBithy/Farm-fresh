"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const [userType, setUserType] = useState("customer");
  const [profileImage, setProfileImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [bio, setBio] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   const response = await fetch("/api/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     alert("Registration successful!");
    //   } else {
    //     const message = await response.text();
    //     alert("Error: " + message);
    //   }
    // } catch (error) {
    //   console.error("Registration error", error);
    //   alert("Something went wrong");
    // }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          I want to register as:
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="relative group">
            <input
              type="radio"
              value="customer"
              {...register("userType", { required: true })}
              className="sr-only peer"
            />
            <div className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-200">
              <div className="text-center">
                <i className="fas fa-user text-2xl mb-3 text-gray-600 dark:text-gray-400 peer-checked:text-primary-600 group-hover:text-primary-500 transition-colors"></i>
                <div className="font-semibold text-gray-900 dark:text-white peer-checked:text-primary-700 dark:peer-checked:text-primary-300">
                  Customer
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Buy fresh produce
                </div>
              </div>
            </div>
          </label>
          <label className="relative group">
            <input
              type="radio"
              value="farmer"
              {...register("userType", { required: true })}
              className="sr-only peer"
            />
            <div className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-200">
              <div className="text-center">
                <i className="fas fa-tractor text-2xl mb-3 text-gray-600 dark:text-gray-400 peer-checked:text-primary-600 group-hover:text-primary-500 transition-colors"></i>
                <div className="font-semibold text-gray-900 dark:text-white peer-checked:text-primary-700 dark:peer-checked:text-primary-300">
                  Farmer
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Sell your produce
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName", { required: true })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Address
            </label>
            <textarea
              id="address"
              {...register("address", { required: true })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white resize-none"
              placeholder="Enter your full address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: true })}
              type="password"
              className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Last Name
            </label>
            <input
              id="lastName"
              {...register("lastName", { required: true })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Doe"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              {...register("phone", { required: true })}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="+880 1234 567890"
            />
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Bio{" "}
              <span className="text-gray-400 text-xs font-normal">
                (Optional)
              </span>
            </label>
            <textarea
              id="bio"
              {...register("bio")}
              rows={3}
              maxLength={250}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white resize-none"
              placeholder="Tell us about yourself..."
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              {...register("confirmPassword", { required: true })}
              type="password"
              className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      {/* FARMER FIELDS */}
      {watch("userType") === "farmer" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="farmName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Farm Name
              </label>
              <input
                id="farmName"
                {...register("farmName")}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Green Valley Farm"
              />
            </div>
            <div>
              <label
                htmlFor="specialization"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Specialization
              </label>
              <select
                id="specialization"
                {...register("specialization")}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select specialization</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="grains">Grains</option>
                <option value="dairy">Dairy</option>
                <option value="mixed">Mixed Farming</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="farmSize"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Farm Size
            </label>
            <div className="flex space-x-2">
              <input
                id="farmSize"
                {...register("farmSize")}
                type="number"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="5.5"
              />
              <select
                id="farmSizeUnit"
                {...register("farmSizeUnit")}
                className="w-24 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white text-sm"
              >
                <option value="acres">Acres</option>
                <option value="hectares">Hectares</option>
                <option value="sq_ft">Sq Ft</option>
                <option value="sq_m">Sq M</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start">
        <input
          id="terms"
          {...register("terms", { required: true })}
          type="checkbox"
          className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label
          htmlFor="terms"
          className="ml-2 text-sm text-gray-600 dark:text-gray-400"
        >
          I agree to the
          <a href="#" className="text-primary-600 hover:text-primary-500">
            {" "}
            Terms and Conditions{" "}
          </a>
          and
          <a href="#" className="text-primary-600 hover:text-primary-500">
            {" "}
            Privacy Policy
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-105"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegistrationForm;
