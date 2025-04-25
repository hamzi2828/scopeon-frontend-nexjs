"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { merchantLogin } from '@/redux/authSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { getUserDetailsFromToken } from "@/helper/helper";
import { showToast } from "@/helper/toast";

const SignInAsMerchant: React.FC = () => {
  const [merchantEmail, setMerchantEmail] = useState<string>("");
  const [merchantPassword, setMerchantPassword] = useState<string>("");
  const [showMerchantPassword, setShowMerchantPassword] = useState<boolean>(false);
  const [fieldErrors2, setFieldErrors2] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const auth = useSelector((state: RootState) => state.auth);

  const toggleMerchantPasswordVisibility = () => setShowMerchantPassword(!showMerchantPassword);
  const clearMerchantEmail = () => setMerchantEmail("");

  const handleMerchantLogin = () => {
    const errors: { [key: string]: string } = {};
    if (!merchantEmail) errors.email2 = "Email is required";
    if (!merchantPassword) errors.password2 = "Password is required";
    setFieldErrors2(errors);
    if (Object.keys(errors).length > 0) return;
    dispatch(merchantLogin({ email: merchantEmail, password: merchantPassword }));
  };

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      const userDetails = getUserDetailsFromToken();
      if (userDetails?.userType === "merchant") {
        router.push("/merchant/dashboard");
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
      <h1 className="text-3xl font-bold my-10">Sign in as Merchant</h1>
      {auth.error && <div className="text-red-500 text-sm mb-4">{auth.error}</div>}
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
          disabled={auth.loading}
        >
          {auth.loading ? "Signing In..." : "Sign In"}
        </button>
        {auth.error && <div className="text-red-500 text-sm mt-2">{auth.error}</div>}
      </div>
    </div>
  );
};

export default SignInAsMerchant;
