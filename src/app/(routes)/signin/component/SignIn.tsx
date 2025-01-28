"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation
import { loginUser } from "../service/signinService"; // Import the loginUser function
import { LoginErrorType, LoginRequestType, LoginResponseType } from "../types/types"; // Import the LoginErrorType
import Cookies from "js-cookie";
import {getTokenFromCookies ,getUserIdFromToken, getUserDetailsFromToken} from "../../../../helper/helper"


const SignIn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("account");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [email2, setEmail2] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  const router = useRouter(); // Replace useNavigate with useRouter

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const clearEmail = () => {
    setEmail("");
  };

  const clearEmail2 = () => {
    setEmail2("");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
  
    setLoading(true);
  
    const loginData: LoginRequestType = { email, password }; // Prepare the login data
  
    try {
      const response: LoginResponseType = await loginUser(loginData); // Use loginData for the login request
      alert(response.message);
      Cookies.set("token", response.token, { expires: 7, path: "/" }); // Set token with a 7-day expiration
      let userDetails = getUserDetailsFromToken();
      console.log(userDetails?.role.roleName);
      if (userDetails?.role.roleName === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    } catch (err) {
      // Assuming `err` has a `statusCode` and `message`, or provide defaults
      const errorResponse: LoginErrorType = {
        statusCode: err instanceof Error && err.stack ? 500 : 0,  // Provide a default status code, or extract it from `err`
        message: err instanceof Error ? err.message : "An error occurred during login"
      };
      setError(errorResponse.message); // Set the error using the LoginErrorType
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div>
      <div className="w-full max-w-screen-sm mx-auto text-center">
        <h1 className="text-3xl font-bold my-10">Sign in to score great deals!</h1>
        
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="flex justify-between border-b mb-6 mx-5 md:mx-0">
          <button
            className={`py-2 lg:px-20 md:px-14 ${
              activeTab === "account"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("account")}
          >
            As a Customer
          </button>
          <button
            className={`py-2 lg:px-20 md:px-14 ${
              activeTab === "newCustomer"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("newCustomer")}
          >
            As a Merchant
          </button>
        </div>
        <div className="mt-4 mx-5">
          {activeTab === "account" ? (
            <>
              <div className="mb-6">
                <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Email"
                  />
                  {email && (
                    <button
                      onClick={clearEmail}
                      className="absolute right-3 text-gray-500 hover:text-gray-700"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
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

              <div className="flex flex-col items-start mb-6">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot your password?
                </a>
                <p className="text-sm text-blue-500">
                  Dont have an account? <Link href="/signup/customer" className="hover:underline font-semibold">
                    Sign up
                  </Link>
                </p>
              </div>

              <button
                className="w-full bg-orange-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-orange-700 mb-5 text-center block"
                onClick={handleLogin}
              >
                Login Dashboard
              </button>
            </>
          ) : (
            <>
              <div className="mb-6">
                <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
                  <input
                    type="email"
                    id="email2"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Email"
                  />
                  {email2 && (
                    <button
                      onClick={clearEmail2}
                      className="absolute right-3 text-gray-500 hover:text-gray-700"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    id="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility2}
                    className="text-xs font-medium text-gray-500"
                  >
                    {showPassword2 ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start mb-6">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot your password?
                </a>
                <p className="text-sm text-blue-500">
                  Dont have an account? <Link href="/signup/merchant" className="hover:underline font-semibold">
                    Sign up
                  </Link>
                </p>
              </div>

              <button
                className="w-full bg-orange-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-orange-700 mb-5 text-center block"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
