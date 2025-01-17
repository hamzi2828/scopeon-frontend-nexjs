"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Using Next.js router for navigation

const SignUpMerchant: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [businessAddress, setBusinessAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [businessType, setBusinessType] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const clearInput = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter("");
  };

  const handleSignUp = () => {
    if (
      !businessName ||
      !businessAddress ||
      !fullName ||
      !email ||
      !phoneNumber ||
      !website ||
      !businessType ||
      !password ||
      !confirmPassword
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Sign up successful!");
    router.push("/welcome"); // Navigate using Next.js router
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto text-center">
      <h1 className="text-3xl font-bold my-10">Sign Up as a Merchant</h1>
      <div className="mt-4 mx-5">
        <div className="mb-6">
          <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full outline-none"
              placeholder="Business Name"
            />
            {businessName && (
              <button
                onClick={() => clearInput(setBusinessName)}
                className="absolute right-3 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Other input fields */}
        <div className="mb-6">
          <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type="text"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className="w-full outline-none"
              placeholder="Business Address"
            />
            {businessAddress && (
              <button
                onClick={() => clearInput(setBusinessAddress)}
                className="absolute right-3 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full outline-none"
              placeholder="First & Last Name"
            />
            {fullName && (
              <button
                onClick={() => clearInput(setFullName)}
                className="absolute right-3 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
              placeholder="Email Address"
            />
            {email && (
              <button
                onClick={() => clearInput(setEmail)}
                className="absolute right-3 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full outline-none"
              placeholder="Phone Number"
            />
            {phoneNumber && (
              <button
                onClick={() => clearInput(setPhoneNumber)}
                className="absolute right-3 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="mb-6">
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 outline-none"
          >
            <option value="">Choose a category</option>
            <option value="retail">Retail</option>
            <option value="service">Service</option>
            <option value="ecommerce">E-commerce</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Password and Confirm Password */}
        <div className="mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-xs font-medium text-gray-500"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full outline-none"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="text-xs font-medium text-gray-500"
            >
              {showConfirmPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
        </div>

        <button
          className="w-full bg-orange-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-orange-700 mb-5 text-center block"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpMerchant;
