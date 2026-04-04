import React from "react";

export interface ThemedButtonProps {
    variant?: "primary" | "secondary" | "outline" | "outline-gold" | "text" | "ghost" | "danger" | "gradient" | "gold";
    size?: "sm" | "md" | "lg";
    rounded?: "standard" | "pill";
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
    variant = "primary",
    size = "md",
    rounded = "standard",
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    className = "",
    onClick,
    type = "button",
}) => {
    const baseClasses =
        "inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out cursor-pointer font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    const variantClasses: Record<string, string> = {
        primary:
            "bg-wenza-primary hover:bg-wenza-primary-hover text-white shadow-sm focus-visible:ring-wenza-primary hover:shadow-lg hover:shadow-wenza-primary/30",
        secondary:
            "bg-wenza-card hover:bg-wenza-bg text-wenza-primary border-[1.5px] border-wenza-primary focus-visible:ring-wenza-secondary",
        outline:
            "bg-transparent hover:bg-wenza-bg text-wenza-primary border-[1.5px] border-wenza-primary focus-visible:ring-wenza-secondary",
        "outline-gold":
            "bg-transparent hover:bg-wenza-gold/10 text-wenza-gold border border-wenza-gold focus-visible:ring-wenza-gold",
        text:
            "bg-transparent hover:bg-wenza-bg text-wenza-text hover:text-wenza-primary focus-visible:ring-wenza-border",
        ghost:
            "bg-transparent hover:bg-wenza-bg text-wenza-text hover:text-wenza-brown focus-visible:ring-wenza-border",
        danger:
            "bg-wenza-error hover:bg-red-700 text-white shadow-sm focus-visible:ring-wenza-error",
        gradient:
            "bg-linear-to-r from-wenza-primary to-wenza-primary-hover text-white shadow-md focus-visible:ring-wenza-primary",
        gold:
            "bg-wenza-gold hover:bg-white text-wenza-brown font-bold focus-visible:ring-wenza-gold",
    };

    const sizeClasses: Record<string, string> = {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-11 px-6 py-2.5 text-[15px]",
        lg: "h-12 px-8 py-3 text-[16px]",
    };

    const roundedClasses: Record<string, string> = {
        standard: "rounded-[8px]",
        pill: "rounded-full",
    };

    const widthClass = fullWidth ? "w-full" : "w-auto";

    const buttonClassName = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        widthClass,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type={type}
            className={buttonClassName}
            disabled={disabled || isLoading}
            onClick={onClick}
        >
            {isLoading ? (
                <>
                    <svg
                        className="animate-spin h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
                    <span className="truncate">{children}</span>
                    {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};

export default ThemedButton;
