"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { customerLogin } from '@/redux/authSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { getUserDetailsFromToken } from "@/helper/helper";
import { showToast } from "@/helper/toast";

const SignInAsCustomer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const auth = useSelector((state: RootState) => state.auth);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const clearEmail = () => setEmail("");

  const handleLogin = () => {
    const errors: { [key: string]: string } = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (Object.keys(errors).length > 0) return;
    dispatch(customerLogin({ email, password }));
  };

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      const userDetails = getUserDetailsFromToken();
      if (userDetails?.userType === "customer") {
        router.push("/customer/dashboard");
      } else {
        router.push("/");
      }
    }
    if (auth.error) {
      showToast(auth.error, "error");
    }
  }, [auth.isAuthenticated, auth.user, auth.error, router]);

  return (
    <div className="w-full max-w-screen-sm mx-auto text-center">
      <h1 className="text-3xl font-bold my-10">Sign in to score great deals!</h1>
      {auth.error && <div className="text-red-500 text-sm mb-4">{auth.error}</div>}
      {auth.loading && <div className="text-gray-500 mb-2">Signing you in...</div>}
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
          disabled={auth.loading}
        >
          {auth.loading ? "Signing In..." : "Login Dashboard"}
        </button>
      </div>
    </div>
  );
};

export default SignInAsCustomer;
