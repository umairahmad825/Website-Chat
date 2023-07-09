import React from "react";

export const Bookmark = ({ className }) => {
  return (
    <svg
      className={`bookmark ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.4317 8.98207V8.98128C10.4317 7.91186 11.2774 7.08313 12.2615 7.08313H27.7377C28.7298 7.08313 29.5829 7.92009 29.5829 8.98128V31.4247L21.2483 27.7916C20.452 27.4445 19.5472 27.4445 18.7509 27.7916L10.4175 31.4241L10.4317 8.98207Z"
        stroke="#AFB9CA"
        strokeWidth="2.5"
      />
    </svg>
  );
};