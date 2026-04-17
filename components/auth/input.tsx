import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    error?: string;
    [key: string]: any;
}

export default function Input({ label, error, id, ...props }: InputProps) {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1"
            >
                {label}
            </label>
            <input
                id={id}
                className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-primary focus:ring-0 px-4 py-4 text-on-surface rounded-t-lg transition-colors placeholder:text-on-surface-variant/40"
                {...props}
            />
            {error && <p className="text-xs text-red-600 ml-1">{error}</p>}
        </div>
    );
}
