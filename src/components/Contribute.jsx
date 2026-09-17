import {
  Upload,
  MapPin,
  Leaf,
  Camera,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "../css/Contribute.css";

function Contribute() {
  return (
    <section
      className="contribute-section section"
      id="contribute"
    >
      <div className="contribute-bg" />
      <div className="contribute-overlay" />

      <div className="contribute-inner section-inner">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="contribute-content">

          <span className="eyebrow">
            CONTRIBUTE TO TAXOFLORA
          </span>

          <h2>
            Every Observation
            <em> Matters.</em>
          </h2>

          <p>
            Help build a richer digital record of regional flora.
            Contribute plant observations with photographs,
            locations and field information.
          </p>

          <div className="contribute-actions">

            {/* ADD SPECIMEN BUTTON */}
            <a
              href="/add-specimen"
              className="btn btn-primary"
            >
              <Upload size={18} />

              <span>
                Add a Specimen
              </span>

              <ArrowRight size={17} />
            </a>

            {/* ARCHIVE LINK */}
            <a
              href="#herbarium"
              className="contribute-secondary"
            >
              Learn About the Archive
            </a>

          </div>


          {/* POINTS */}

          <div className="contribute-points">

            <div>
              <CheckCircle2 size={17} />
              <span>
                Photograph your observation
              </span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>
                Add location information
              </span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>
                Preserve the digital record
              </span>
            </div>

          </div>

        </div>


        {/* =========================
            RIGHT DIGITAL SPECIMEN
            PREVIEW PANEL
        ========================== */}

        <div className="contribute-panel">

          <div className="panel-header">

            <div>
              <span>
                NEW OBSERVATION
              </span>

              <h3>
                Digital Specimen
              </h3>
            </div>

            <div className="panel-status">
              <span />
              READY
            </div>

          </div>


          {/* UPLOAD AREA */}

          <div className="upload-area">

            <div className="upload-icon">
              <Camera size={25} />
            </div>

            <strong>
              Upload Plant Photograph
            </strong>

            <span>
              Add a clear photograph of the plant specimen
            </span>

            <a
              href="/add-specimen"
              className="upload-button"
            >
              Choose Image
            </a>

          </div>


          {/* PREVIEW FIELDS */}

          <div className="contribute-fields">

            <div className="fake-field">

              <Leaf size={16} />

              <div>
                <span>
                  PLANT NAME
                </span>

                <strong>
                  Enter plant name
                </strong>
              </div>

            </div>


            <div className="fake-field">

              <MapPin size={16} />

              <div>
                <span>
                  LOCATION
                </span>

                <strong>
                  Add observation location
                </strong>
              </div>

            </div>

          </div>


          {/* PANEL FOOTER */}

          <div className="panel-footer">

            <span>
              Your observation becomes part of the
              TAXOFLORA digital archive.
            </span>

            <Leaf size={17} />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contribute;