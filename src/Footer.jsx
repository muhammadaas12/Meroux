import React, { useEffect, useState } from "react";

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const options = {
                timeZone: "Europe/London",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };
            setTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-white/10 py-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                {/* Copyright */}
                <p className="text-xs text-white/60">
                    &copy; 2026 <span className="font-semibold text-white/80">Meroux Ltd</span>.
                    <span className="hidden xs:inline"> All rights reserved.</span>
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-5">
                    {[
                    
                        { name: "Instagram", icon: "fa-brands fa-instagram", link: "https://www.instagram.com/merouxlimited?igsh=MWxmbnFmZzRhZThlbA==" },
                        
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs"
                        >
                            <i className={`${item.icon} text-sm`}></i>
                            <span className="hidden sm:inline">{item.name}</span>
                        </a>
                    ))}
                </div>

                {/* Time */}
                <div className="text-xs text-white/50 font-mono tracking-wide min-w-[100px] text-right">
                    {time} <span className="text-white/30">BST</span>
                </div>
            </div>
        </footer>
    );
}
