"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../globals.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const showMenu = open || hovered;

    return (
        <header className="main-header">
            <Link href="/">
                <Image
                    src="/res/icon/Icon.svg"
                    width={160}
                    height={100}
                    alt="KLTL Studios Logo"
                    className="logo"
                />
            </Link>
            <button
                className="hamburger"
                aria-label="Open navigation"
                onClick={() => {
                    setOpen((prev) => {
                        const next = !prev;
                        if (!next) setHovered(false);
                        return next;
                    });
                }}
                onMouseEnter={() => setHovered(true)}
            >
                &#9776;
            </button>
            <nav className={`header-nav floating-nav${showMenu ? " open" : ""}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => {
                    setHovered(false);
                    setOpen(false);
                }}>
                <Link href="/" className="default-btn" onClick={() => { setOpen(false); setHovered(false); }}>
                    <h1>Home</h1>
                </Link>
                <Link href="/about" className="default-btn" onClick={() => { setOpen(false); setHovered(false); }}>
                    <h1>About</h1>
                </Link>
                <Link href="/projects" className="default-btn" onClick={() => { setOpen(false); setHovered(false); }}>
                    <h1>My Projects</h1>
                </Link>
            </nav>
        </header >
    );
}