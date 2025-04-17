//src/app/(routes)/signup/component/SignUp.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { registerUser } from "../service/signupService";
import { ToastRoot, showToast } from "@/helper/toast";

const SignUpCustomer: React.FC = () => {
  const [fullName, setFullName] = useState<string>(""); 
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // To handle loading state
  const [error, setError] = useState<string | null>(null); // For displaying errors
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

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
    if (!fullName) errors.fullName = "Full name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (!confirmPassword) errors.confirmPassword = "Confirm password is required";
    if (password && confirmPassword && password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      const userData = {
        fullname: fullName,
        email: email,
        password: password,
        role: "customer"
      };

      const response = await registerUser(userData); // Call the registerUser function
      if (response) {
        showToast("Sign up successful!", "success");
        setTimeout(() => {
          router.push("/signin"); // Redirect to login page
        }, 1500);
      }
    } catch (err: unknown) {
      let message = "Registration failed";
      if (err && typeof err === "object" && "message" in err && typeof (err as { message: unknown }).message === "string") {
        message = (err as { message: string }).message;
      }
      showToast(message, "error");
      setError(message); // Set error message
    } finally {
      setLoading(false); // Reset loading state after the process
    }
  };


  return (
    <>
      <ToastRoot />
      <div className="w-full max-w-screen-sm mx-auto text-center">
        <h1 className="text-3xl font-bold my-10">Sign Up as a Customer</h1>
      <div className="mt-4 mx-5">
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-left font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <div className={`relative flex items-center border rounded-lg px-4 py-2 mt-2 ${fieldErrors.fullName ? "border-red-500" : "border-gray-300"}`}>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full outline-none"
              placeholder="Full name"
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
          {fieldErrors.fullName && <p className="text-red-500 text-sm mt-1">{fieldErrors.fullName}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-left font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className={`relative flex items-center border rounded-lg px-4 py-2 mt-2 ${fieldErrors.email ? "border-red-500" : "border-gray-300"}`}>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none"
              placeholder="Email"
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
          {fieldErrors.email && <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-left font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className={`flex items-center border rounded-lg px-4 py-2 mt-2 ${fieldErrors.password ? "border-red-500" : "border-gray-300"}`}>
            <input
              id="password"
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
          {fieldErrors.password && <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-left font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <div className={`flex items-center border rounded-lg px-4 py-2 mt-2 ${fieldErrors.confirmPassword ? "border-red-500" : "border-gray-300"}`}>
            <input
              id="confirmPassword"
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
          {fieldErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{fieldErrors.confirmPassword}</p>}
        </div>

        <p className="text-sm text-gray-600 mb-6 text-start">
          By signing up, I agree to the
          <a href="#" className="text-blue-500 hover:underline px-1">
            Terms of Use
          </a>
          and have read the
          <a href="#" className="text-blue-500 hover:underline ps-1">
            Privacy Statement
          </a>
          .
        </p>

        <button
          className="w-full bg-orange-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-orange-700 mb-5 text-center block"
          onClick={handleSignUp}
          disabled={loading} // Disable the button when loading
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

        <p className="text-md text-gray-600 text-center">Or Sign Up with</p>
        <div className="flex justify-center items-center my-6 gap-4">
          <button className="flex justify-center items-center rounded-lg md:px-10">
            <FaGoogle className="text-red-500 hover:text-red-600 text-3xl" />
          </button>
          <button className="flex justify-center items-center rounded-lg md:px-10">
            <FaFacebook className="text-blue-500 hover:text-blue-600 text-3xl" />
          </button>
          <button className="flex justify-center items-center rounded-lg md:px-10">
            <FaInstagram className="text-pink-500 hover:text-pink-500 text-3xl" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUpCustomer;
