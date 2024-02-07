import React from "react";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, type, ...props }: Props) {
  return (
    <input
      className={className}
      type={type}
      {...props}
    />
  );
}
