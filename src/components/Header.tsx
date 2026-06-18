"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/content";
import { useModal } from "./ModalProvider";

type HeaderProps = {
  variant?: "overlay" | "cream";
};

export function Header({ variant = "cream" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const { openBook, openCareers } = useModal();

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

  const handleNavClick = (
    e: React.MouseEvent,
    action?: "book" | "careers",
  ) => {
    if (action === "book") {
      e.preventDefault();
      openBook();
      setMobileOpen(false);
    }
    if (action === "careers") {
      e.preventDefault();
      openCareers();
      setMobileOpen(false);
    }
  };

  const leftNav = mainNav.slice(0, 3);
  const rightNav = mainNav.slice(3);

  return (
    <>
      <header
        className={`header ${variant === "cream" ? "cream" : ""} ${stuck ? "stick" : ""}`}
      >
        <nav className="main-nav" aria-label="Main">
          <a
            href={site.social.instagram}
            className="nav-instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          />
          <a
            href={site.social.tiktok}
            className="nav-tiktok"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          />

          <button
            type="button"
            className="mobilebook"
            onClick={openBook}
            aria-label="Make a reservation"
          >
            BOOK
          </button>

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
                      <span>{item.thai}</span>
                      <br />
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.action)}
                    >
                      <span>{item.thai}</span>
                      <br />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="nav-logo">
              <Link href="/" aria-label={site.name}>
                <Image
                  src={
                    variant === "cream" ? site.logoBlue : site.logoWhite
                  }
                  alt={site.name}
                  width={200}
                  height={85}
                  priority
                  style={{ width: "auto", height: "85px" }}
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
                      <span>{item.thai}</span>
                      <br />
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.action)}
                    >
                      <span>{item.thai}</span>
                      <br />
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
                    <span>{item.thai}</span>
                    <br />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.action ? "#" : item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.action);
                      if (!item.action) setMobileOpen(false);
                    }}
                  >
                    <span>{item.thai}</span>
                    <br />
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
