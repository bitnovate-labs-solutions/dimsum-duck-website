"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/content";

type HeaderProps = {
  variant?: "overlay" | "cream";
};

export function Header({ variant = "cream" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-active", mobileOpen);
    return () => document.body.classList.remove("mobile-active");
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftNav = mainNav.slice(0, 3);
  const rightNav = mainNav.slice(3);

  return (
    <>
      <header
        className={`header ${variant === "cream" ? "cream" : ""} ${stuck ? "stick" : ""}`}
      >
        <nav className="main-nav" aria-label="Main">
          <input
            type="checkbox"
            id="menu-toggle"
            className="menu-toggle"
            checked={mobileOpen}
            onChange={(e) => setMobileOpen(e.target.checked)}
          />
          <label htmlFor="menu-toggle" className="menu-toggle-label">
            <span className="screen-reader-text">Toggle menu</span>
            <span />
            <span />
            <span />
          </label>

          <div className="nav-inner">
            <ul className="nav-left">
              {leftNav.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.chinese && <span>{item.chinese}</span>}
                      {item.chinese && <br />}
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      {item.chinese && <span>{item.chinese}</span>}
                      {item.chinese && <br />}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="nav-logo">
              <Link href="/" aria-label={site.name}>
                <img
                  src={site.logoBlue}
                  alt={site.name}
                  className="nav-logo-img"
                />
              </Link>
            </div>

            <ul className="nav-right">
              {rightNav.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.chinese && <span>{item.chinese}</span>}
                      {item.chinese && <br />}
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      {item.chinese && <span>{item.chinese}</span>}
                      {item.chinese && <br />}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <div className={`mobile ${mobileOpen ? "active" : ""}`}>
        <nav className="mobile-main" aria-label="Menu">
          <ul>
            {mainNav.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.chinese && <span>{item.chinese}</span>}
                    {item.chinese && <br />}
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.chinese && <span>{item.chinese}</span>}
                    {item.chinese && <br />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
