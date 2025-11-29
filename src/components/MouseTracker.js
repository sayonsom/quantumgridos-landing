"use client";

import { useEffect } from "react";

export default function MouseTracker() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty("--mouse-x", `${x}px`);
            document.documentElement.style.setProperty("--mouse-y", `${y}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return null;
}
