import React from 'react';

export interface ThemedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    variant?: "default" | "dark";
}

const ThemedInput: React.FC<ThemedInputProps> = ({
    label,
    error,
    variant = "default",
    className = '',
    id,
    ...props
}) => {
    const autoId = React.useId();
    const inputId = id || `input-${autoId}`;

    const variantClasses = {
        default: `bg-wenza-card border-wenza-border text-wenza-brown placeholder:text-wenza-muted
            focus:border-wenza-primary focus:ring-4 focus:ring-wenza-primary/10
            ${error ? '!border-wenza-error focus:!ring-wenza-error/10' : ''}`,
        dark: `bg-white/15 border-white/30 text-white placeholder:text-white/60
            focus:border-wenza-gold focus:bg-white/20 focus:ring-4 focus:ring-wenza-gold/10
            ${error ? '!border-wenza-error focus:!ring-wenza-error/20' : ''}`,
    };

    const labelClasses = {
        default: "text-wenza-brown",
        dark: "text-white/90"
    };

    return (
        <div className={`flex flex-col w-full ${className}`}>
            {label && (
                <label htmlFor={inputId} className={`text-[14px] mb-1.5 font-semibold tracking-wide ${labelClasses[variant]}`}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`
                    w-full h-11 border rounded-[8px] px-4 text-[15px] outline-none transition-all duration-200
                    ${variantClasses[variant]}
                `}
                {...props}
            />
            {error && <span className="text-[12px] text-wenza-error mt-1">{error}</span>}
        </div>
    );
};

export default ThemedInput;
