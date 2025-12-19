"use client";
import React, { useEffect, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "loose",
    themeVariables: {
        fontFamily: "var(--font-inter)",
        primaryColor: "#FFD93D",
        primaryTextColor: "#1a202c",
        primaryBorderColor: "#FFD93D",
        lineColor: "#6BCB77",
        secondaryColor: "#1a202c",
        tertiaryColor: "#1a202c",
    },
});

export default function Mermaid({ chart }) {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        const renderChart = async () => {
            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
            } catch (error) {
                console.error("Mermaid parsing failed", error);
                // Fallback or show error
                setSvg(`<pre class="text-red-500">Failed to render diagram</pre>`);
            }
        };

        if (chart) {
            renderChart();
        }
    }, [chart]);

    if (!svg) return <div className="animate-pulse h-32 bg-white/5 rounded-xl w-full my-8"></div>;

    return <div className="mermaid-container my-8 bg-dark-800/50 p-6 rounded-xl border border-white/5 flex justify-center w-full overflow-x-auto" dangerouslySetInnerHTML={{ __html: svg }} />;
}
