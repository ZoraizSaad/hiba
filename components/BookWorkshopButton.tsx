"use client";

import React from "react";

export type ButtonVariant =
  | "primary"     // Dark maroon (#471E24) bg with cream text (#FCEFE1)
  | "secondary"   // Light cream (#FCEFDD / #FCEFE1) bg with dark maroon text (#613339)
  | "terracotta"  // Warm rust (#B24924) bg with cream text
  | "outline";    // Border outline style

export type ButtonSize = "sm" | "md" | "lg";

export interface BookWorkshopButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  showIcon?: boolean;
  showArrow?: boolean;
  iconType?: "step6" | "plus" | "calendar";
  iconPosition?: "left" | "right";
  className?: string;
  ariaLabel?: string;
}

export default function BookWorkshopButton({
  children = "Book Workshop",
  variant = "primary",
  size = "md",
  href,
  onClick,
  showIcon = false,
  showArrow = true,
  iconType = "step6",
  iconPosition,
  className = "",
  ariaLabel,
}: BookWorkshopButtonProps): React.JSX.Element {
  const resolvedIconPosition = iconPosition ?? (iconType === "plus" ? "right" : "left");

  // Variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[#471E24] text-[#FCEFE1] hover:bg-[#B24924] shadow-md hover:shadow-xl",
    secondary:
      "bg-[#FCEFDD] text-[#613339] hover:bg-[#471E24] hover:text-[#FCEFE1] shadow-md hover:shadow-lg",
    terracotta:
      "bg-[#B24924] text-[#FCEFE1] hover:bg-[#471E24] shadow-md hover:shadow-xl",
    outline:
      "border border-[#471E24]/20 bg-transparent text-[#471E24] hover:bg-[#471E24] hover:text-[#FCEFE1]",
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-5 py-2 text-[11px]",
    md: "px-6 py-[11px] text-[13px]",
    lg: "px-7 py-[14px] text-[14px]",
  };

  const baseClasses = `
    group
    inline-flex
    items-center
    justify-center
    gap-2.5
    rounded-full
    font-sofia
    font-medium
    leading-none
    transition-all
    duration-300
    cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  const renderIcon = () => {
    if (!showIcon) return null;

    if (iconType === "step6") {
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-current/15 p-1 transition-transform duration-300 group-hover:scale-110">
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current"
          >
            <path
              d="M6.66667 9.24935C7.86328 9.24935 8.83333 8.2793 8.83333 7.08268C8.83333 5.88607 7.86328 4.91602 6.66667 4.91602C5.47005 4.91602 4.5 5.88607 4.5 7.08268C4.5 8.2793 5.47005 9.24935 6.66667 9.24935Z"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3307 9.24935C14.5273 9.24935 15.4974 8.2793 15.4974 7.08268C15.4974 5.88607 14.5273 4.91602 13.3307 4.91602C12.1341 4.91602 11.1641 5.88607 11.1641 7.08268C11.1641 8.2793 12.1341 9.24935 13.3307 9.24935Z"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33594 15.8333C3.33594 13.5833 4.91927 12 6.66927 12C8.41927 12 10.0026 13.5833 10.0026 15.8333"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 15.8333C10 13.5833 11.5833 12 13.3333 12C15.0833 12 16.6667 13.5833 16.6667 15.8333"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }

    if (iconType === "plus") {
      return (
        <span className="font-bold text-[14px] leading-none transition-transform duration-300 group-hover:rotate-90">
          +
        </span>
      );
    }

    return null;
  };

  const content = (
    <>
      {resolvedIconPosition === "left" && renderIcon()}
      <span>{children}</span>
      {resolvedIconPosition === "right" && renderIcon()}
      {showArrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
