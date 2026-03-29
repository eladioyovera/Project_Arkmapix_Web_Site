export function SoftwareIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#de-g)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-code-icon lucide-square-code"
        >
            <defs>
                <linearGradient
                    id="de-g"
                    x1="2"
                    y1="2"
                    x2="26"
                    y2="26"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00C6FF" />
                    <stop offset="1" stopColor="#7B2FF7" />
                </linearGradient>
            </defs>

            <path d="m10 9-3 3 3 3" />
            <path d="m14 15 3-3-3-3" />
            <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
    )
}

export function AiIcon() {
    return(<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#brain-g)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-brain-icon lucide-brain"
                >
                    <defs>
                        <linearGradient
                            id="brain-g"
                            x1="2"
                            y1="2"
                            x2="26"
                            y2="26"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#00C6FF" />
                            <stop offset="1" stopColor="#7B2FF7" />
                        </linearGradient>
                    </defs>
    
                    <path d="M12 18V5" />
                    <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                    <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                    <path d="M18 18a4 4 0 0 0 2-7.464" />
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                    <path d="M6 18a4 4 0 0 1-2-7.464" />
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
                </svg>)
}

export function DataIcon() {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#chart-g)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"
    >
        <defs>
            <linearGradient
                id="chart-g"
                x1="2"
                y1="2"
                x2="26"
                y2="26"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#00C6FF" />
                <stop offset="1" stopColor="#7B2FF7" />
            </linearGradient>
        </defs>

        <path d="M12 16v5" />
        <path d="M16 14v7" />
        <path d="M20 10v11" />
        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
        <path d="M4 18v3" />
        <path d="M8 14v7" />
    </svg>)
} 

export function BusinessIcon() {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#trend-g)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-trending-up-icon lucide-trending-up"
    >
        <defs>
            <linearGradient
                id="trend-g"
                x1="2"
                y1="2"
                x2="26"
                y2="26"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#00C6FF" />
                <stop offset="1" stopColor="#7B2FF7" />
            </linearGradient>
        </defs>

        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>)
}

export function CloudIcon() {
    return (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 20C5.5 20 3 18 3 15.5C3 13 5 11.5 7 11.5C7.5 9.5 9.5 8 12 8C15 8 17 10 17.5 12.5H18C20.5 12.5 23 14.5 23 17C23 19.5 20.5 21 18 21H8" stroke="url(#cd-g)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 24v-6M12 21l2 3 2-3" stroke="url(#cd-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs><linearGradient id="cd-g" x1="3" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF" /><stop offset="1" stopColor="#7B2FF7" /></linearGradient></defs>
    </svg>)
}

export function AcademyIcon(){
    return (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4L26 10L14 16L2 10L14 4Z" stroke="url(#ac-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="url(#ac-g)" fillOpacity="0.08" />
        <path d="M6 13v8C6 21 9.5 24 14 24C18.5 24 22 21 22 21v-8" stroke="url(#ac-g)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 10v6" stroke="url(#ac-g)" strokeWidth="1.5" strokeLinecap="round" />
        <defs><linearGradient id="ac-g" x1="2" y1="4" x2="26" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF" /><stop offset="1" stopColor="#C026B0" /></linearGradient></defs>
    </svg>)
}