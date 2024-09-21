import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "medium",
  icon,
  iconPosition,
  className = "",
}) => {
  const baseClasses =
    "font-bold rounded focus:outline-none focus:ring-2 inline-flex items-center justify-center";

  const variantClasses = {
    default: "bg-sky text-gray-100 hover:text-cinnamon",
    primary: "bg-pumpkin text-white hover:text-gold",
    secondary: "bg-forest text-white hover:text-cinnamon",
    outlined:
      "bg-transparent border-4 border-gold rounded-lg text-gray-500 hover:border-sky hover:text-cinnamon",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes}>
      {icon && (iconPosition === "left" || !iconPosition) && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
