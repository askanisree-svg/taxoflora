import { Leaf, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Explore", href: "#explore" },
    { name: "Map", href: "#map" },
    { name: "Herbarium", href: "#herbarium" },
    { name: "Conservation", href: "#conservation" },
    { name: "About", href: "#about" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="nav-inner">

        {/* =================================================
            BRAND
            ================================================= */}

        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="TAXOFLORA Home"
        >

          <span className="brand-mark">
            <Leaf size={43} strokeWidth={1.45} />
          </span>

          <span className="brand-copy">

            <strong>
              TAXOFLORA
            </strong>

            <small>
              Plants Today. A Greener Tomorrow.
            </small>

          </span>

        </a>


        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}


          <a
            href="#contribute"
            className="nav-cta"
            onClick={closeMenu}
          >

            <Leaf size={17} strokeWidth={1.7} />

            <span>
              Add Specimen
            </span>

            <ArrowUpRight size={16} />

          </a>

        </nav>


        {/* =================================================
            MOBILE MENU
            ================================================= */}

        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >

          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}

        </button>

      </div>

    </header>
  );
}

export default Navbar;