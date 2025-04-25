"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "../service/signinService";
import { LoginResponseType } from "../types/types";
import Cookies from "js-cookie";
import { getUserDetailsFromToken } from "../../../../helper/helper";
import { showToast } from "@/helper/toast";

const SignInAsMerchant: React.FC = () => {
  const [merchantEmail, setMerchantEmail] = useState<string>("");
  const [merchantPassword, setMerchantPassword] = useState<string>("");
  const [showMerchantPassword, setShowMerchantPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors2, setFieldErrors2] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const toggleMerchantPasswordVisibility = () => setShowMerchantPassword(!showMerchantPassword);
  const clearMerchantEmail = () => setMerchantEmail("");

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
      console.log('Decoded user details from token:', userDetails);
      if (userDetails?.userType === "merchant") {
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
    <div className="w-full max-w-screen-sm mx-auto text-center">
      <h1 className="text-3xl font-bold my-10">Sign in as Merchant</h1>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <div className="mt-4 mx-5">
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
              <button onClick={clearMerchantEmail} className="absolute right-3 text-gray-500 hover:text-gray-700">&times;</button>
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
      </div>
    </div>
  );
};

export default SignInAsMerchant;
