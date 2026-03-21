'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: '/', label: 'Top' },
        { href: '/service', label: 'Service' },
        { href: '/works', label: 'Works' },
        { href: '/about', label: 'About' },
        { href: '/flow-price', label: 'Flow & Price' },
        { href: '/faq', label: 'FAQ' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    // Retro typing effect for logo
    const [logoText, setLogoText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'FROM CREATE';

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setLogoText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => setShowCursor(false), 2000);
            }
        }, 80);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    {logoText}
                    {showCursor && <span style={{ animation: 'blink 0.5s steps(2) infinite' }}>█</span>}
                </Link>
                <nav className={`nav ${menuOpen ? 'open' : ''}`} id="mainNav">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={pathname === link.href ? 'page' : undefined}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <button
                    id="navToggle"
                    aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-expanded={menuOpen}
                    aria-controls="mainNav"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
