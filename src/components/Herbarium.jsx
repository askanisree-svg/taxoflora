import {
  ArrowUpRight,
  Leaf,
  MapPin,
  CalendarDays,
  Database,
} from "lucide-react";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase";
import "../css/Herbarium.css";


function Herbarium() {
  const [specimens, setSpecimens] = useState([]);
  const [loading, setLoading] = useState(true);


  // ==========================================================
  // LOAD DIGITAL SPECIMENS FROM FIRESTORE
  // ==========================================================

  useEffect(() => {
    async function loadSpecimens() {
      try {
        const snapshot = await getDocs(
          collection(db, "plants")
        );

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSpecimens(data.slice(0, 3));

        console.log(
          "✅ Digital Herbarium loaded:",
          data.length,
          "records"
        );
      } catch (error) {
        console.error(
          "❌ Failed to load herbarium records:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadSpecimens();
  }, []);


  return (
    <section
      className="herbarium-section section"
      id="herbarium"
    >

      <div className="herbarium-bg" />


      <div className="herbarium-inner section-inner">


        {/* ====================================================
            INTRO
            ==================================================== */}

        <div className="herbarium-intro">

          <div className="herbarium-copy">

            <span className="eyebrow">
              PRESERVE
            </span>


            <h2>
              Preserve Every
              <em> Botanical Story.</em>
            </h2>


            <p>
              TAXOFLORA transforms field observations into
              structured digital specimens, preserving botanical
              knowledge without the physical degradation of
              traditional specimens over time.
            </p>


            <div className="herbarium-actions">

              <a
                href="/collection"
                className="btn btn-primary"
              >
                Explore Digital Archive
                <ArrowUpRight size={17} />
              </a>


              <div className="herbarium-tech">

                <Database size={17} />

                <span>
                  Long-term digital preservation
                </span>

              </div>

            </div>

          </div>


          {/* DIGITAL ARCHIVE SYMBOL */}

          <div className="herbarium-symbol">

            <div className="herbarium-circle">

              <div className="herbarium-circle-icon">
                <Database
                  size={62}
                  strokeWidth={0.8}
                />
              </div>

              <span>
                DIGITAL ARCHIVE
              </span>

            </div>

          </div>

        </div>


        {/* ====================================================
            DIGITAL SPECIMEN RECORDS
            ==================================================== */}

        <div className="herbarium-records">

          {loading ? (

            <div className="herbarium-loading">

              <Leaf size={28} />

              <span>
                Loading digital specimens...
              </span>

            </div>

          ) : specimens.length === 0 ? (

            <div className="herbarium-loading">

              <Leaf size={28} />

              <span>
                No digital specimens available.
              </span>

            </div>

          ) : (

            specimens.map((record, index) => (

              <article
                className="specimen-record"
                key={record.id}
              >


                {/* =================================================
                    SPECIMEN IMAGE
                    ================================================= */}

                <div className="specimen-visual">

                  {record.image ? (

                    <img
                      src={record.image}
                      alt={
                        record.commonName ||
                        "Digital plant specimen"
                      }
                      className="specimen-image"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                  ) : (

                    <div className="specimen-leaf">

                      <Leaf
                        size={54}
                        strokeWidth={0.8}
                      />

                    </div>

                  )}


                  <div className="specimen-image-overlay" />


                  <span className="record-id">
                    TF-{String(index + 1).padStart(3, "0")}
                  </span>

                </div>


                {/* =================================================
                    SPECIMEN INFORMATION
                    ================================================= */}

                <div className="specimen-content">

                  <span className="record-label">
                    DIGITAL SPECIMEN
                  </span>


                  <h3>
                    {record.commonName ||
                      `Plant ${index + 1}`}
                  </h3>


                  <em>
                    {record.scientificName ||
                      "Scientific name unavailable"}
                  </em>


                  <div className="specimen-details">


                    {/* FAMILY */}

                    {record.family && (

                      <div>

                        <Leaf size={14} />

                        <span>
                          {record.family}
                        </span>

                      </div>

                    )}


                    {/* LOCATION */}

                    <div>

                      <MapPin size={14} />

                      <span>

                        {record.latitude !== undefined &&
                        record.longitude !== undefined
                          ? `${record.latitude}, ${record.longitude}`
                          : record.location ||
                            record.state ||
                            "Location unavailable"}

                      </span>

                    </div>


                    {/* DATE */}

                    <div>

                      <CalendarDays size={14} />

                      <span>

                        {record.observationDate ||
                          "Observation date unavailable"}

                      </span>

                    </div>

                  </div>


                  <a
                    href="/collection"
                    className="record-link"
                  >
                    View Specimen

                    <ArrowUpRight size={15} />

                  </a>

                </div>

              </article>

            ))

          )}

        </div>


        {/* ====================================================
            BOTTOM STATISTICS
            ==================================================== */}

        <div className="herbarium-bottom">


          <div className="herbarium-stat">

            <strong>
              {specimens.length > 0
                ? "120+"
                : "100+"}
            </strong>

            <span>
              DIGITAL RECORDS
            </span>

          </div>


          <div className="herbarium-stat">

            <strong>
              LONG-TERM
            </strong>

            <span>
              BOTANICAL PRESERVATION
            </span>

          </div>


          <div className="herbarium-stat">

            <strong>
              24 / 7
            </strong>

            <span>
              ACCESSIBLE ARCHIVE
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Herbarium;