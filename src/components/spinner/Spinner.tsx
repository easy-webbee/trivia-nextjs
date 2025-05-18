// components/Spinner.tsx
import React from "react";
import "./spinner.css"; // Import the CSS file

export const Spinner = () => {
  return (
    <div className="lds-ring" role="status" aria-label="Loading">
      <div></div><div></div><div></div><div></div>
    </div>
  );
};
