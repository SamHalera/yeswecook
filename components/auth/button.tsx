import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = ""
}: ButtonProps) {
    const baseStyles = "w-full font-headline font-bold py-5 rounded-lg transition-all transform active:scale-[0.98]";

    const variants = {
        primary: "bg-primary hover:bg-primary-container text-on-primary editorial-shadow",
        secondary: "bg-surface-container-high hover:bg-surface-container-highest text-on-surface",
        outline: "bg-transparent border border-outline-variant/20 hover:bg-surface-container-low text-on-surface"
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
}
