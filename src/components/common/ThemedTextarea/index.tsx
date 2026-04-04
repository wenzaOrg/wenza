import React from 'react';

export interface ThemedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const ThemedTextarea: React.FC<ThemedTextareaProps> = ({
    label,
    error,
    className = '',
    id,
    ...props
}) => {
    const autoId = React.useId();
    const inputId = id || `textarea-${autoId}`;

    return (
        <div className={`flex flex-col w-full ${className}`}>
            {label && (
                <label htmlFor={inputId} className="text-[14px] text-wenza-text mb-1.5 font-medium">
                    {label}
                </label>
            )}
            <textarea
                id={inputId}
                className={`
                    w-full min-h-[120px] border rounded-[8px] px-4 py-3 text-[15px] bg-wenza-card outline-none transition-all duration-200
                    placeholder:text-wenza-muted text-wenza-brown resize-y
                    ${error
                        ? 'border-wenza-error focus:ring-4 focus:ring-wenza-error/10 focus:border-wenza-error'
                        : 'border-wenza-border focus:ring-4 focus:ring-wenza-primary/10 focus:border-wenza-primary'
                    }
                `}
                {...props}
            />
            {error && <span className="text-[12px] text-wenza-error mt-1">{error}</span>}
        </div>
    );
};

export default ThemedTextarea;
