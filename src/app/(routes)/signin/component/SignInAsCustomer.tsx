"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "../service/signinService";
import { LoginResponseType } from "../types/types";
import Cookies from "js-cookie";
import { getUserDetailsFromToken } from "../../../../helper/helper";
import { showToast } from "@/helper/toast";

const SignInAsCustomer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const clearEmail = () => setEmail("");

  const handleLogin = async () => {
    const errors: { [key: string]: string } = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    try {
      const response: LoginResponseType = await loginUser({ email, password });
      showToast(response.message, "success");
      Cookies.set("token", response.token, { expires: 7, path: "/" });
      const userDetails = getUserDetailsFromToken();
      if (userDetails?.userType === "customer") {
        router.push("/customer/dashboard");
      } else {
        router.push("/");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An error occurred during login";
      showToast(message, "error");
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto text-center">
      <h1 className="text-3xl font-bold my-10">Sign in to score great deals!</h1>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      {loading && <div className="text-gray-500 mb-2">Signing you in...</div>}
      <div className="mt-4 mx-5">
        {/* Customer Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-left font-medium text-gray-700 mb-1">Customer Email</label>
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
              <button onClick={clearEmail} className="absolute right-3 text-gray-500 hover:text-gray-700">&times;</button>
            )}
          </div>
        </div>
        {/* Customer Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-left font-medium text-gray-700 mb-1">Customer Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mt-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none"
              placeholder="Password"
            />
            <button type="button" onClick={togglePasswordVisibility} className="text-xs font-medium text-gray-500">
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start mb-6">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
          <p className="text-sm text-blue-500">
            Don’t have an account?{" "}
            <Link href="/signup/customer" className="hover:underline font-semibold">Sign up</Link>
          </p>
        </div>
        <button
          className="w-full bg-orange-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-orange-700 mb-5 text-center block"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Login Dashboard"}
        </button>
      </div>
    </div>
  );
};

export default SignInAsCustomer;
