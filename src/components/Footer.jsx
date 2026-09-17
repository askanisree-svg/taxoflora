import {
  Leaf,
  ArrowUpRight,
  Code2,
} from "lucide-react";

import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer-section" id="footer">

      <div className="footer-bg" />
      <div className="footer-overlay" />

      <div className="footer-inner section-inner">

        {/* =========================
            FOOTER CONTENT
        ========================== */}

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">
              <Leaf size={28} strokeWidth={1.5} />
            </div>

            <h3>
              TAXOFLORA
            </h3>

            <p className="footer-tagline">
              Where traditional botany meets
              modern web technology.
            </p>

            <p className="footer-description">
              A digital botanical platform connecting
              field observations, geographic data and
              botanical knowledge to help preserve
              regional flora.
            </p>

            {/* SOCIAL / CODE */}

            <div className="footer-social">

              <a
                href="#"
                aria-label="Social"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Source Code"
              >
                <Code2 size={17} />
              </a>

            </div>

          </div>


          {/* =========================
              EXPLORE
          ========================== */}

          <div className="footer-column">

            <span className="footer-label">
              EXPLORE
            </span>

            <a href="/#home">
              Home
            </a>

            <a href="/#explore">
              Explore Flora
            </a>

            <a href="/#map">
              Biodiversity Map
            </a>

            <a href="/#conservation">
              Conservation
            </a>

          </div>


          {/* =========================
              PLATFORM
          ========================== */}

          <div className="footer-column">

            <span className="footer-label">
              PLATFORM
            </span>

            <a href="/collection">
              Plant Collection
            </a>

            <a href="/#map">
              Geo-tagged Flora
            </a>

            <a href="/#herbarium">
              Digital Archive
            </a>

            <a href="/add-specimen">
              Add Specimen
            </a>

          </div>


          {/* =========================
              BUILT WITH
          ========================== */}

          <div className="footer-column">

            <span className="footer-label">
              BUILT WITH
            </span>

            <span className="footer-tech">
              React.js
            </span>

            <span className="footer-tech">
              Firebase NoSQL
            </span>

            <span className="footer-tech">
              Leaflet Maps API
            </span>

            <span className="footer-tech">
              OpenStreetMap
            </span>

          </div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================== */}

        <div className="footer-bottom">

          <span>
            © 2026 TAXOFLORA. All rights reserved.
          </span>

          <span>
            Botanical Intelligence Platform
          </span>

          <span>
            React.js · Firebase · Leaflet
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;