import React from "react";

export type ToastType = "success" | "error";

export interface ToastProps {
  message: string;
  type?: ToastType;
}

const getToastRoot = () => {
  if (typeof window === "undefined") return null;
  let root = document.getElementById("toast-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "toast-root";
    root.className = "pointer-events-none";
    root.style.position = "fixed";
    root.style.top = "0";
    root.style.right = "0";
    document.body.appendChild(root);
  }
  return root;
};

export const showToast = (message: string, type: ToastType = "success") => {
  const toastRoot = getToastRoot();
  if (!toastRoot) return;
  const toast = document.createElement("div");
  toast.className = `fixed top-5 right-5 z-50 px-6 py-3 rounded shadow-lg text-white font-semibold bg-${
    type === "success" ? "green-600" : "red-600"
  } animate-fade-in-out`;
  toast.innerText = message;
  toastRoot.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2500);
};

export const ToastRoot: React.FC = () => (
  <div id="toast-root" className="pointer-events-none" style={{ position: "fixed", top: 0, right: 0 }} />
);
