"use client";
import React, { useEffect, useRef } from "react";

export default function Chart() {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!container.current) return;

        // Remove existing script if present
        container.current.innerHTML = ""; 

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            allow_symbol_change: true,
            support_host: "https://www.tradingview.com",
        });

        container.current.appendChild(script);
    }, []); // Only runs once on mount

    return (
        <div className="chart h-[50vh] mt-6 rounded-3xl overflow-hidden">
            <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
}
