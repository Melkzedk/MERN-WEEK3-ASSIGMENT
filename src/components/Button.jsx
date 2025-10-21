import React from "react";
import classNames from "../utils/classNames";

const VARIANT_STYLES = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 border",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  type = "button",
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      className={classNames(base, variantClass, disabledClass, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
