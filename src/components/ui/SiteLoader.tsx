'use client'

import { useEffect, useState } from "react"

export default function SiteLoader() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === "complete") {
            handleLoad(); // Already loaded
        } else {
            window.addEventListener("load", handleLoad); // Wait for load
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);
    return (
        <>
            {isLoading && (
                <div className="fixed top-0 right-0 bottom-0 left-0 bg-black flex items-center justify-center z-70">
                    <div className="loader"></div>
                </div>
            )}
        </>
    )
}