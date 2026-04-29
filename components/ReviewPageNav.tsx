"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "特商法に基づく表記", href: "/legal-tokushoho-for-review" },
  { label: "商品概要", href: "/flow-price-for-review" },
];

const linkStyle: React.CSSProperties = {
  color: "#0066cc",
  textDecoration: "none",
  display: "block",
  padding: "8px 16px",
};

export function ReviewHamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", top: 16, right: 16, zIndex: 10000 }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="メニュー"
        style={{
          background: "#ffffff",
          border: "1px solid #cccccc",
          borderRadius: 4,
          padding: "8px 10px",
          cursor: "pointer",
          fontSize: "1.2rem",
          lineHeight: 1,
        }}
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: 4,
            background: "#ffffff",
            border: "1px solid #cccccc",
            borderRadius: 4,
            minWidth: 200,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={linkStyle}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function ReviewFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e0e0e0",
        marginTop: "3rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        textAlign: "center",
        fontSize: "0.9rem",
      }}
    >
      {navItems.map((item, i) => (
        <span key={item.href}>
          {i > 0 && (
            <span style={{ margin: "0 12px", color: "#999999" }}>|</span>
          )}
          <Link href={item.href} style={{ color: "#0066cc", textDecoration: "none" }}>
            {item.label}
          </Link>
        </span>
      ))}
    </footer>
  );
}
