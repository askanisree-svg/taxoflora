import {
  Leaf,
  MapPin,
  Database,
  ShieldCheck,
  ArrowRight,
  TreePine,
} from "lucide-react";

import "../css/Conservation.css";

const impacts = [
  {
    icon: Leaf,
    number: "01",
    title: "Document",
    text: "Create structured digital records of regional plant observations.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Map",
    text: "Connect botanical observations with their geographic locations.",
  },
  {
    icon: Database,
    number: "03",
    title: "Preserve",
    text: "Maintain accessible digital botanical information for the future.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Protect",
    text: "Support biodiversity awareness through organized field data.",
  },
];

function Conservation() {
  return (
    <section
      className="conservation-section section"
      id="conservation"
    >
      <div className="conservation-bg" />

      <div className="conservation-overlay" />

      <div className="conservation-inner section-inner">
        <div className="conservation-header">
          <div className="conservation-heading">
            <span className="eyebrow">
              CONSERVATION IMPACT
            </span>

            <h2>
              Knowledge Today.
              <em> Protection Tomorrow.</em>
            </h2>
          </div>

          <p className="conservation-intro">
            Every documented observation becomes part of a growing
            digital knowledge system designed to make regional
            biodiversity easier to understand, explore and preserve.
          </p>
        </div>

        <div className="conservation-main">
          <div className="conservation-statement">
            <div className="statement-icon">
              <TreePine size={28} />
            </div>

            <span>THE TAXOFLORA APPROACH</span>

            <h3>
              From physical specimens to a
              <strong> living digital archive.</strong>
            </h3>

            <p>
              Digital botanical records can bring plant observations,
              geographic information and botanical knowledge together
              in one accessible platform.
            </p>

            <a href="#herbarium" className="conservation-link">
              Explore the Digital Herbarium
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="impact-grid">
            {impacts.map((impact) => {
              const Icon = impact.icon;

              return (
                <article
                  className="impact-card"
                  key={impact.number}
                >
                  <div className="impact-top">
                    <span>{impact.number}</span>

                    <div className="impact-icon">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3>{impact.title}</h3>

                  <p>{impact.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="conservation-bottom">
          <div className="conservation-metric">
            <strong>100+</strong>
            <span>PLANT OBSERVATIONS</span>
          </div>

          <div className="conservation-metric">
            <strong>10+</strong>
            <span>FIELD LOCATIONS</span>
          </div>

          <div className="conservation-metric">
            <strong>1</strong>
            <span>DIGITAL KNOWLEDGE PLATFORM</span>
          </div>

          <div className="conservation-metric">
            <strong>∞</strong>
            <span>LONG-TERM ACCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conservation;