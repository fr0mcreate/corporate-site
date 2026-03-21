import Link from 'next/link';

export default function Footer() {
    const links = [
        { href: '/', label: 'Top' },
        { href: '/service', label: 'Service' },
        { href: '/works', label: 'Works' },
        { href: '/about', label: 'About' },
        { href: '/flow-price', label: 'Flow & Price' },
        { href: '/faq', label: 'FAQ' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/legal-tokushoho', label: '特定商取引法に基づく表記' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-logo">FR0M CREATE</p>
                <nav className="footer-links">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>{link.label}</Link>
                    ))}
                </nav>
                <p className="footer-copy">&copy; 2026 株式会社FR0M CREATE All rights reserved.</p>
            </div>
        </footer>
    );
}
