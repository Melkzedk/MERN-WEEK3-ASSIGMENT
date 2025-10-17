import React from "react";

export default function Card({ title, children, className = "", footer }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div className="text-sm text-gray-700">{children}</div>
      {footer && <div className="mt-4 border-t pt-3 text-sm text-gray-600">{footer}</div>}
    </div>
  );
}
