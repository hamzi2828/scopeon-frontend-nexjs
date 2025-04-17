"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../service/signupService";
import { ToastRoot, showToast } from "@/helper/toast";

const SignUpMerchant: React.FC = () => {
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
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

  const handleSignUp = async () => {
    const errors: { [key: string]: string } = {};
    if (!businessName.trim()) errors.businessName = "Business Name is required";
    if (!businessAddress.trim()) errors.businessAddress = "Business Address is required";
    if (!fullName.trim()) errors.fullName = "Full Name is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!phoneNumber.trim()) errors.phoneNumber = "Phone Number is required";
    if (!website.trim()) errors.website = "Website is required";
    if (!businessType.trim()) errors.businessType = "Business Type is required";
    if (!password.trim()) errors.password = "Password is required";
    if (!confirmPassword.trim()) errors.confirmPassword = "Confirm Password is required";

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (password !== confirmPassword) {
      setFieldErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      const response = await registerUser({
        fullname: fullName,
        email,
        password,
        businessName,
        businessAddress,
        phoneNumber,
        website,
        businessType,
        userType: "merchant",
      });
      // Show toast with user's name before redirect
      const registeredName = response?.user?.fullname || fullName;
      showToast(`${registeredName}, you have been registered!`, "success");
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (error: unknown) {
      let message = "Registration failed";
      function isErrorWithMessage(err: unknown): err is { message: string } {
        return (
          typeof err === "object" &&
          err !== null &&
          "message" in err &&
          typeof (err as { message: unknown }).message === "string"
        );
      }
      if (isErrorWithMessage(error)) {
        message = error.message;
      }
      setFieldErrors({ email: message });
    }
  };

  return (
    <>
      <ToastRoot />
      <div className="w-full max-w-screen-sm mx-auto text-center">
        <h1 className="text-3xl font-bold my-10">Sign Up as a Merchant</h1>
        <div className="mt-4 mx-5">
          {/* Field Generator */}
          {[
            { label: "Business Name", value: businessName, setter: setBusinessName, name: "businessName" },
            { label: "Business Address", value: businessAddress, setter: setBusinessAddress, name: "businessAddress" },
            { label: "First & Last Name", value: fullName, setter: setFullName, name: "fullName" },
            { label: "Email Address", value: email, setter: setEmail, name: "email" },
            { label: "Phone Number", value: phoneNumber, setter: setPhoneNumber, name: "phoneNumber" },
            { label: "Website", value: website, setter: setWebsite, name: "website" },
          ].map(({ label, value, setter, name }) => (
            <div key={name} className="mb-6">
  <label htmlFor={name} className="block text-left font-medium text-gray-700 mb-1">
    {label}
  </label>
  <div
    className={`relative flex items-center border rounded-lg px-4 py-2 mt-2 ${
      fieldErrors[name] ? "border-red-500" : "border-gray-300"
    }`}
  >
    <input
      id={name}
      type="text"
      value={value}
      onChange={(e) => setter(e.target.value)}
      className="w-full outline-none"
      placeholder={label}
    />
    {value && (
      <button
        onClick={() => clearInput(setter)}
        className="absolute right-3 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
    )}
  </div>
  {fieldErrors[name] && (
    <p className="text-red-500 text-sm mt-1">{fieldErrors[name]}</p>
  )}
</div>
          ))}

          {/* Business Type */}
          <div className="mb-6">
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className={`w-full border rounded-lg px-4 py-2 mt-2 outline-none ${
                fieldErrors.businessType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Choose a category</option>
              <option value="retail">Retail</option>
              <option value="service">Service</option>
              <option value="ecommerce">E-commerce</option>
              <option value="other">Other</option>
            </select>
            {fieldErrors.businessType && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.businessType}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <div
              className={`flex items-center border rounded-lg px-4 py-2 mt-2 ${
                fieldErrors.password ? "border-red-500" : "border-gray-300"
              }`}
            >
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
            {fieldErrors.password && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <div
              className={`flex items-center border rounded-lg px-4 py-2 mt-2 ${
                fieldErrors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            >
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
            {fieldErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.confirmPassword}</p>
            )}
          </div>

          <button
            className="w-full bg-orange-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-orange-700 mb-5 text-center block"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpMerchant;
