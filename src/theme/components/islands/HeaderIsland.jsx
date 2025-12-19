// src/theme/components/islands/HeaderIsland.jsx
import { useState, useEffect } from 'react';
import styles from '../../styles/header.module.css';
import fallbackLogo from '../../assets/trans-logo.png';

export default function HeaderIsland({ fieldValues = {} }) {
  const { logoImage, logoText = "IntegriCloud" } = fieldValues;
  
  // STATE - Exactly like working example
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const defaultLinks = [
    { text: "Home", href: "/home-1", isButton: "false" },
    { text: "About", href: "/about-us", isButton: "false" },
    { text: "Services", href: "/our-services", isButton: "false" },
    { text: "Contact", href: "/contact-us", isButton: "true" },
  ];

  const safeNavLinks = 
    Array.isArray(fieldValues.navLinks) && fieldValues.navLinks.length > 0
      ? fieldValues.navLinks
      : defaultLinks;

  const logoSrc = logoImage?.src || fallbackLogo;

  // TOGGLE FUNCTION - Simple like working example
  const toggleMobileNav = () => {
    console.log('Toggling mobile nav. Current state:', isMobileNavOpen);
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  // Close on escape key - like working example
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileNavOpen) {
        closeMobileNav();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileNavOpen]);

  // Prevent body scroll when menu open - like working example
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen]);

  return (
    <header className={styles.header}>
      {/* MOBILE TOGGLE BUTTON - Exactly like working example */}
      <button
        className={`${styles.menuToggle} ${isMobileNavOpen ? styles.active : ''}`}
        onClick={toggleMobileNav}
        aria-label="Toggle Menu"
      >
        <span className={styles.menuIcon}></span>
      </button>

      {/* LOGO */}
      <div className={styles.logoContainer}>
        <a href="/">
          <img
            src={logoSrc}
            alt={logoText}
            className={styles.logoImg}
          />
        </a>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className={styles.nav}>
        {safeNavLinks.map((link, idx) => (
          <a
            key={`desktop-${idx}`}
            href={link.href || "#"}
            className={link.isButton === "true" ? styles.contactBtn : ""}
          >
            {link.text}
          </a>
        ))}
      </nav>

      {/* MOBILE NAVIGATION - Using .show class like working example */}
      <nav
        className={`${styles.mobileNav} ${isMobileNavOpen ? styles.show : ''}`}
        id="mobile-nav"
      >
        {safeNavLinks.map((link, idx) => (
          <a
            key={`mobile-${idx}`}
            href={link.href || "#"}
            className={link.isButton === "true" ? styles.mobileContactBtn : ""}
            onClick={closeMobileNav}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </header>
  );
}