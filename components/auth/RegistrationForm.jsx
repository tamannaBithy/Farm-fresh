"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTractor, FaUser } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import ImageAvatar from "../../public/assets/profile-placeholder-image.jpg";
import GoogleBtn from "./GoogleBtn";

const RegistrationForm = () => {
  const [userType, setUserType] = useState("customer");
  const [profilePreview, setProfilePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const { register, handleSubmit, setValue, watch } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!data.terms) {
      alert("You must agree to the terms and policy");
      return;
    }

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key !== "profilePicture" && key !== "terms") {
          formData.append(key, value);
        }
      });
      formData.append("termsAccepted", data.terms);

      const fileList = watch("profilePicture");
      if (fileList && fileList.length > 0) {
        formData.append("profilePicture", fileList[0]);
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const message = await response.text();
        setError(message);
      }
    } catch (error) {
      console.error("Registration error", error);
      setError(error.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
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
                <FaUser className="text-2xl mx-auto mb-3 text-gray-600 dark:text-gray-400 peer-checked:text-primary-600 group-hover:text-primary-500 transition-colors" />
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
                <FaTractor className=" text-2xl mx-auto mb-3 text-gray-600 dark:text-gray-400 peer-checked:text-primary-600 group-hover:text-primary-500 transition-colors" />
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

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Profile Picture
        </label>
        <div className="flex items-center justify-center space-x-6">
          <div className="shrink-0">
            <Image
              className="h-20 w-20 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
              src={profilePreview || ImageAvatar}
              alt="Profile preview"
              width={80}
              height={80}
            />
          </div>

          <div className="flex-1 max-w-xs">
            <label
              htmlFor="profilePicture"
              className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition block text-center"
            >
              <span className="flex items-center justify-center">
                <FaCamera className="mr-2" />
                Choose photo
              </span>
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                className="sr-only"
                {...register("profilePicture")}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const previewURL = URL.createObjectURL(file);
                    setProfilePreview(previewURL);
                  }
                }}
              />
            </label>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
              PNG, JPG, GIF up to 2MB
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              autoComplete="off"
              {...register("email", { required: true })}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Address
            </label>
            <textarea
              {...register("address", { required: true })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white resize-none"
              placeholder="Enter your full address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              autoComplete="new-password"
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
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Last Name
            </label>
            <input
              {...register("lastName", { required: true })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Doe"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="+880 1234 567890"
            />
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Bio{" "}
              <span className="text-gray-400 text-xs font-normal">
                (Optional)
              </span>
            </label>
            <textarea
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
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <input
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
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Farm Name
              </label>
              <input
                id="farmName"
                {...register("farmName", { required: true })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Green Valley Farm"
              />
            </div>
            <div>
              <label
                htmlFor="specialization"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Specialization
              </label>
              <select
                id="specialization"
                {...register("specialization", { required: true })}
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
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >
              Farm Size
            </label>
            <div className="flex space-x-2">
              <input
                id="farmSize"
                {...register("farmSize", { required: true })}
                type="number"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="5.5"
              />
              <select
                id="farmSizeUnit"
                {...register("farmSizeUnit", { required: true })}
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
        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-semibold transition duration-200 transform hover:scale-105"
      >
        Create Account
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <GoogleBtn />
    </form>
  );
};

export default RegistrationForm;
