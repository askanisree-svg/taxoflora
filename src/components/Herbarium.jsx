import {
  BookOpen,
  ArrowUpRight,
  Leaf,
  MapPin,
  CalendarDays,
  Database,
} from "lucide-react";

import "../css/Herbarium.css";

const specimenRecords = [
  {
    id: "TF-001",
    name: "Plant 1",
    scientificName: "Digital botanical specimen",
    family: "Plant Family",
    location: "Telangana",
    date: "Field observation",
  },
  {
    id: "TF-002",
    name: "Plant 2",
    scientificName: "Digital botanical specimen",
    family: "Plant Family",
    location: "Telangana",
    date: "Field observation",
  },
  {
    id: "TF-003",
    name: "Plant 3",
    scientificName: "Digital botanical specimen",
    family: "Plant Family",
    location: "Telangana",
    date: "Field observation",
  },
];

function Herbarium() {
  return (
    <section className="herbarium-section section" id="herbarium">
      <div className="herbarium-bg" />

      <div className="herbarium-inner section-inner">
        <div className="herbarium-intro">
          <div className="herbarium-copy">
            <span className="eyebrow">
              DIGITAL HERBARIUM
            </span>

            <h2>
              Preserve Every
              <em> Botanical Story.</em>
            </h2>

            <p>
              TAXOFLORA transforms field observations into structured
              digital specimens, creating a long-term botanical archive
              that can be explored from anywhere.
            </p>

            <div className="herbarium-actions">
              <a href="#explore" className="btn btn-primary">
                Explore Archive
                <ArrowUpRight size={17} />
              </a>

              <div className="herbarium-tech">
                <Database size={17} />
                <span>Digital-first archive</span>
              </div>
            </div>
          </div>

          <div className="herbarium-symbol">
            <div className="herbarium-circle">
              <BookOpen size={72} strokeWidth={0.8} />
              <span>ARCHIVE</span>
            </div>
          </div>
        </div>

        <div className="herbarium-records">
          {specimenRecords.map((record) => (
            <article className="specimen-record" key={record.id}>
              <div className="specimen-visual">
                <div className="specimen-leaf">
                  <Leaf size={54} strokeWidth={0.8} />
                </div>

                <span className="record-id">
                  {record.id}
                </span>
              </div>

              <div className="specimen-content">
                <span className="record-label">
                  DIGITAL SPECIMEN
                </span>

                <h3>{record.name}</h3>

                <em>{record.scientificName}</em>

                <div className="specimen-details">
                  <div>
                    <Leaf size={14} />
                    <span>{record.family}</span>
                  </div>

                  <div>
                    <MapPin size={14} />
                    <span>{record.location}</span>
                  </div>

                  <div>
                    <CalendarDays size={14} />
                    <span>{record.date}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="record-link"
                >
                  View Specimen
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="herbarium-bottom">
          <div className="herbarium-stat">
            <strong>100+</strong>
            <span>DIGITAL RECORDS</span>
          </div>

          <div className="herbarium-stat">
            <strong>LONG-TERM</strong>
            <span>BOTANICAL PRESERVATION</span>
          </div>

          <div className="herbarium-stat">
            <strong>24 / 7</strong>
            <span>ACCESSIBLE ARCHIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herbarium;