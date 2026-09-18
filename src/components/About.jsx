import {
  Building2,
  UserRound,
  UsersRound,
  Code2,
  BookOpen,
  MapPin,
  Leaf,
} from "lucide-react";
import "../css/About.css";

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="about-bg" />

      <div className="about-overlay" />

      <div className="about-inner section-inner">
        {/* LEFT SIDE */}
        <div className="about-main">
          <span className="eyebrow">ABOUT TAXOFLORA</span>

          <h2>
            TAXO
            <span>FLORA</span>
          </h2>

          <h3>
            Where traditional botany meets
            <em> modern web technology.</em>
          </h3>

          <div className="about-description">
            <p>
              TAXOFLORA is a digital botanical taxonomy platform designed to
              document, organize, explore, and preserve plant information
              using modern web technologies.
            </p>

            <p>
              The platform brings together botanical observations, plant
              photographs, geographical coordinates, and structured taxonomic
              information into a centralized digital resource.
            </p>

            <p>
              Through TAXOFLORA, users can explore plant specimens, understand
              their geographical distribution, and preserve botanical records
              digitally for future reference.
            </p>
          </div>

          {/* THREE CORE IDEAS */}
          <div className="about-pillars">
            <div className="about-pillar">
              <div className="pillar-icon">
                <BookOpen size={25} strokeWidth={1.5} />
              </div>

              <div>
                <strong>EXPLORE</strong>
                <span>Discover plant diversity</span>
              </div>
            </div>

            <div className="about-pillar">
              <div className="pillar-icon">
                <MapPin size={25} strokeWidth={1.5} />
              </div>

              <div>
                <strong>UNDERSTAND</strong>
                <span>Learn through location</span>
              </div>
            </div>

            <div className="about-pillar">
              <div className="pillar-icon">
                <Leaf size={25} strokeWidth={1.5} />
              </div>

              <div>
                <strong>PRESERVE</strong>
                <span>Keep botanical knowledge alive</span>
              </div>
            </div>
          </div>

          {/* QUOTE */}
          <div className="about-quote">
            <p>
              “A digital step towards a greener, more informed tomorrow.”
            </p>

            <span>TAXOFLORA</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-information">

          {/* COLLEGE */}
          <article className="about-info-card">
            <div className="about-card-icon">
              <Building2 size={32} strokeWidth={1.4} />
            </div>

            <div className="about-card-content">
              <span className="about-card-label">COLLEGE</span>

              <div className="about-card-line" />

              <h4>
  Telangana Social Welfare Residential Armed Forces Preparatory Degree College for Women
</h4>
            </div>
          </article>

          {/* FACULTY */}
          <article className="about-info-card">
            <div className="about-card-icon">
              <UserRound size={32} strokeWidth={1.4} />
            </div>

            <div className="about-card-content">
              <span className="about-card-label">
                PROJECT ASSIGNED FACULTY
              </span>

              <div className="about-card-line" />

              <h4>Lt. Dr. Putta Rupa</h4>
              
            </div>
          </article>

          {/* TEAM */}
          <article className="about-info-card about-team-card">
            <div className="about-card-icon">
              <UsersRound size={32} strokeWidth={1.4} />
            </div>

            <div className="about-card-content">
              <span className="about-card-label">
                PROJECT DEVELOPERS
              </span>

              <div className="about-card-line" />

              <div className="team-list">
                <div className="team-member">
  <span>01</span>
  <strong>M. Pranitha</strong>
</div>

<div className="team-member">
  <span>02</span>
  <strong>B. Ammulu</strong>
</div>

<div className="team-member">
  <span>03</span>
  <strong>B. Ashwini</strong>
</div>

<div className="team-member">
  <span>04</span>
  <strong>V. Rathna Mounika</strong>
</div>
              </div>
            </div>
          </article>

          {/* BUILT WITH */}
          <article className="about-info-card about-tech-card">
            <div className="about-card-icon">
              <Code2 size={32} strokeWidth={1.4} />
            </div>

            <div className="about-card-content">
              <span className="about-card-label">BUILT WITH</span>

              <div className="about-card-line" />

              <div className="tech-list">
                <div className="tech-item">
                  <strong>React.js</strong>
                  <span>Frontend Development</span>
                </div>

                <div className="tech-item">
                  <strong>Firebase NoSQL</strong>
                  <span>Database (Firestore)</span>
                </div>

                <div className="tech-item">
                  <strong>Leaflet Maps API</strong>
                  <span>Interactive Mapping</span>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default About;