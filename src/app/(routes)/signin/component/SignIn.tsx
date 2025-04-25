"use client";
import React, { useState } from "react";
import { ToastRoot } from "@/helper/toast";
import SignInAsCustomer from "./SignInAsCustomer";
import SignInAsMerchant from "./SignInAsMerchant";
import { useDispatch } from "react-redux";
import { getUserDetailsFromToken } from "@/helper/helper";
import { logout } from "@/redux/authSlice";

const SignIn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("account");
  const dispatch = useDispatch();

  const handleTabSwitch = (tab: string) => {
    const user = getUserDetailsFromToken();
    if (tab === "account" && user?.userType === "merchant") {
      dispatch(logout());
    }
    if (tab === "merchant" && user?.userType === "customer") {
      dispatch(logout());
    }
    setActiveTab(tab);
  };

  return (
    <>
      <ToastRoot />
      <div className="w-full max-w-screen-sm mx-auto text-center">
        <h1 className="text-3xl font-bold my-10">Sign in to score great deals!</h1>
        {/* Tabs */}
        <div className="flex justify-between border-b mb-6 mx-5 md:mx-0">
          <button
            className={`py-2 lg:px-20 md:px-14 ${activeTab === "account" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500"}`}
            onClick={() => handleTabSwitch("account")}
          >
            As a Customer
          </button>
          <button
            className={`py-2 lg:px-20 md:px-14 ${activeTab === "merchant" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-500"}`}
            onClick={() => handleTabSwitch("merchant")}
          >
            As a Merchant
          </button>
        </div>
        <div className="mt-4 mx-5">
          {activeTab === "account" ? <SignInAsCustomer /> : <SignInAsMerchant />}
        </div>
      </div>
    </>
  );
};

export default SignIn;
