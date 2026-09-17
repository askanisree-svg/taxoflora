import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  MapPin,
  Search,
  CalendarDays,
  Crosshair,
} from "lucide-react";

import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="hero-background" />

      <div className="hero-overlay" />


      {/* =====================================================
          MAIN HERO CONTENT
          ===================================================== */}

      <div className="hero-container section-inner">

        {/* ===================================================
            LEFT SIDE
            =================================================== */}

        <div className="hero-content">

          {/* EYEBROW */}

          <div className="hero-eyebrow">

            <span className="hero-eyebrow-line" />

            <div>
              <span>
                DIGITIZING BOTANICAL TAXONOMY
              </span>

              <span>
                FOR A SUSTAINABLE FUTURE
              </span>
            </div>

          </div>


          {/* HEADING */}

          <h1>
            Discover the
            <br />
            <em>Flora</em> Around Us.
          </h1>


          {/* DESCRIPTION */}

          <p className="hero-description">
            TAXOFLORA transforms real-world plant observations
            into a living digital archive of biodiversity.
          </p>


          {/* BUTTONS */}

          <div className="hero-actions">

            <a
              href="#explore"
              className="hero-button hero-button-primary"
            >

              <Search size={19} />

              <span>
                Explore Flora
              </span>

              <ArrowRight size={17} />

            </a>


            <a
              href="#map"
              className="hero-button hero-button-secondary"
            >

              <MapPin size={19} />

              <span>
                Open Biodiversity Map
              </span>

            </a>

          </div>


          {/* =================================================
              FEATURES
              ================================================= */}

          <div className="hero-features">

            {/* EXPLORE */}

            <div className="hero-feature">

              <div className="hero-feature-icon">
                <Leaf size={28} />
              </div>

              <div className="hero-feature-copy">

                <strong>
                  EXPLORE
                </strong>

                <p>
                  Search plant specimens by
                  scientific family, local name,
                  or region.
                </p>

              </div>

            </div>


            {/* MAP */}

            <div className="hero-feature">

              <div className="hero-feature-icon">
                <MapPin size={28} />
              </div>

              <div className="hero-feature-copy">

                <strong>
                  MAP
                </strong>

                <p>
                  Geo-tag plant habitats to track
                  regional flora visually.
                </p>

              </div>

            </div>


            {/* PRESERVE */}

            <div className="hero-feature">

              <div className="hero-feature-icon">
                <Leaf size={28} />
              </div>

              <div className="hero-feature-copy">

                <strong>
                  PRESERVE
                </strong>

                <p>
                  Digital archiving preserves
                  botanical information over time.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT SIDE
            =================================================== */}

        <div className="hero-visual">

          {/* =================================================
              SPECIMEN CARD
              ================================================= */}

          <div className="hero-specimen-card">

            <div className="specimen-header">

              <div>

                <h2>
                  Plant 1
                </h2>

                <em>
                  Botanical observation
                </em>

              </div>


              <button
                type="button"
                className="specimen-arrow"
                aria-label="View specimen"
              >
                <ArrowUpRight size={17} />
              </button>

            </div>


            <div className="specimen-family">
              PLANT FAMILY
            </div>


            <div className="specimen-divider" />


            {/* LOCATION */}

            <div className="specimen-detail">

              <MapPin size={21} />

              <div>

                <span>
                  LOCATION
                </span>

                <strong>
                  Field observation
                </strong>

              </div>

            </div>


            {/* DATE */}

            <div className="specimen-detail">

              <CalendarDays size={21} />

              <div>

                <span>
                  OBSERVATION
                </span>

                <strong>
                  Field record
                </strong>

              </div>

            </div>


            {/* GPS */}

            <div className="specimen-detail">

              <Crosshair size={21} />

              <div>

                <span>
                  GEO LOCATION
                </span>

                <strong>
                  GPS field data
                </strong>

              </div>

            </div>

          </div>


          {/* =================================================
              HANDWRITTEN-STYLE QUOTE
              ================================================= */}

          <div className="hero-quote">

            <p>
              Where traditional botany
              <br />
              meets modern web technology.
            </p>

            <span />

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM STATISTICS
          ===================================================== */}

      <div className="hero-statistics section-inner">

        <div className="hero-stat">

          <Leaf size={27} />

          <div>

            <strong>
              100+
            </strong>

            <span>
              PLANTS DOCUMENTED
            </span>

          </div>

        </div>


        <div className="hero-stat">

          <MapPin size={27} />

          <div>

            <strong>
              100+
            </strong>

            <span>
              FIELD OBSERVATIONS
            </span>

          </div>

        </div>


        <div className="hero-stat">

          <Leaf size={27} />

          <div>

            <strong>
              25
            </strong>

            <span>
              PLANT FAMILIES
            </span>

          </div>

        </div>


        <div className="hero-stat">

          <MapPin size={27} />

          <div>

            <strong>
              10+
            </strong>

            <span>
              LOCATIONS
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;