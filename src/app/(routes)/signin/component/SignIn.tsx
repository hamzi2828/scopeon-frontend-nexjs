"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "../service/signinService";
import { LoginResponseType } from "../types/types";
import Cookies from "js-cookie";
import { getUserDetailsFromToken } from "../../../../helper/helper";
import { ToastRoot, showToast } from "@/helper/toast";

const SignIn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("account");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [merchantEmail, setMerchantEmail] = useState<string>("");
  const [merchantPassword, setMerchantPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showMerchantPassword, setShowMerchantPassword] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors2, setFieldErrors2] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleMerchantPasswordVisibility = () => setShowMerchantPassword(!showMerchantPassword);

  const clearEmail = () => setEmail("");
  const clearMerchantEmail = () => setMerchantEmail("");

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
      if (userDetails?.role.roleName === "admin") {
        router.push("/admin/dashboard");
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

  const handleMerchantLogin = async () => {
    const errors: { [key: string]: string } = {};
    if (!merchantEmail) errors.email2 = "Email is required";
    if (!merchantPassword) errors.password2 = "Password is required";
    setFieldErrors2(errors);
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    try {
      const response: LoginResponseType = await loginUser({ email: merchantEmail, password: merchantPassword });
      showToast(response.message, "success");
      Cookies.set("token", response.token, { expires: 7, path: "/" });
      const userDetails = getUserDetailsFromToken();
      if (userDetails?.role.roleName === "merchant") {
        router.push("/merchant/dashboard");
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
    <>
      <ToastRoot />
      <div className="w-full max-w-screen-sm mx-auto text-center">
        <h1 className="text-3xl font-bold my-10">Sign in to score great deals!</h1>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {/* Tabs */}
        <div className="flex justify-between border-b mb-6 mx-5 md:mx-0">
          <button
            className={`py-2 lg:px-20 md:px-14 ${activeTab === "account" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("account")}
          >
            As a Customer
          </button>
          <button
            className={`py-2 lg:px-20 md:px-14 ${activeTab === "merchant" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("merchant")}
          >
            As a Merchant
          </button>
        </div>

        {/* Form */}
        <div className="mt-4 mx-5">
          {activeTab === "account" ? (
            <>
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
                    <button onClick={clearEmail} className="absolute right-3 text-gray-500 hover:text-gray-700">
                      &times;
                    </button>
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
              >
                Login Dashboard
              </button>
            </>
          ) : (
            <>
              {/* Merchant Email */}
              <div className="mb-6">
                <label htmlFor="email2" className="block text-left font-medium text-gray-700 mb-1">Merchant Email</label>
                <div className={`relative flex items-center border rounded-lg px-4 py-2 mt-2 ${fieldErrors2.email2 ? "border-red-500" : "border-gray-300"}`}>
                  <input
                    type="email"
                    id="email2"
                    value={merchantEmail}
                    onChange={(e) => setMerchantEmail(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Email"
                  />
                  {merchantEmail && (
                    <button onClick={clearMerchantEmail} className="absolute right-3 text-gray-500 hover:text-gray-700">
                      &times;
                    </button>
                  )}
                </div>
                {fieldErrors2.email2 && <p className="text-red-500 text-sm mt-1">{fieldErrors2.email2}</p>}
              </div>

              {/* Merchant Password */}
              <div className="mb-6">
                <label htmlFor="password2" className="block text-left font-medium text-gray-700 mb-1">Merchant Password</label>
                <div className={`flex items-center border rounded-lg px-4 py-2 mt-2 ${fieldErrors2.password2 ? "border-red-500" : "border-gray-300"}`}>
                  <input
                    type={showMerchantPassword ? "text" : "password"}
                    id="password2"
                    value={merchantPassword}
                    onChange={(e) => setMerchantPassword(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Password"
                  />
                  <button type="button" onClick={toggleMerchantPasswordVisibility} className="text-xs font-medium text-gray-500">
                    {showMerchantPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
                {fieldErrors2.password2 && <p className="text-red-500 text-sm mt-1">{fieldErrors2.password2}</p>}
              </div>

              <div className="flex flex-col items-start mb-6">
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
                <p className="text-sm text-blue-500">
                  Don’t have an account?{" "}
                  <Link href="/signup/merchant" className="hover:underline font-semibold">Sign up</Link>
                </p>
              </div>

              <button
                className="w-full bg-orange-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-orange-700 mb-5 text-center block"
                onClick={handleMerchantLogin}
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
