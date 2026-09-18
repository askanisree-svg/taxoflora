import {
  ArrowUpRight,
  Leaf,
  MapPin,
  Play,
  Search,
  TreePine,
  X,
} from "lucide-react";

import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";

import "leaflet/dist/leaflet.css";
import "../css/BiodiversityMap.css";

import { db } from "../firebase";


// ============================================================
// CONSERVATION STATUS COLORS
// ============================================================

const STATUS_COLORS = {
  endangered: "#EF4444",
  "critically endangered": "#DC2626",

  vulnerable: "#F97316",

  rare: "#A855F7",

  threatened: "#EAB308",

  common: "#22C55E",

  recorded: "#3B82F6",

  "least concern": "#22C55E",

  "near threatened": "#EAB308",

  unknown: "#94A3B8",
};


// ============================================================
// GET MARKER COLOR FROM CONSERVATION STATUS
// ============================================================

function getStatusColor(status) {
  if (!status) {
    return STATUS_COLORS.unknown;
  }

  const normalizedStatus = status
    .toString()
    .trim()
    .toLowerCase();

  return (
    STATUS_COLORS[normalizedStatus] ||
    STATUS_COLORS.unknown
  );
}


// ============================================================
// COMPONENT
// ============================================================

function BiodiversityMap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [firestorePlants, setFirestorePlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // ==========================================================
  // LOAD PLANTS FROM FIRESTORE
  // ==========================================================

  useEffect(() => {
    async function loadPlants() {
      try {
        setLoading(true);
        setError("");

        const snapshot = await getDocs(
          collection(db, "plants")
        );

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFirestorePlants(data);

        console.log(
          "✅ Biodiversity Map loaded:",
          data.length,
          "plants"
        );
      } catch (err) {
        console.error(
          "❌ Failed to load plants from Firestore:",
          err
        );

        setError(
          "Unable to load biodiversity data from Firestore."
        );
      } finally {
        setLoading(false);
      }
    }

    loadPlants();
  }, []);


  // ==========================================================
  // AVAILABLE CONSERVATION STATUSES
  // ==========================================================

  const statuses = useMemo(() => {
    return [
      ...new Set(
        firestorePlants
          .map((plant) => plant.status)
          .filter(Boolean)
      ),
    ];
  }, [firestorePlants]);


  // ==========================================================
  // SEARCH
  // ==========================================================

  const searchResults = useMemo(() => {
    const query = searchTerm
      .trim()
      .toLowerCase();

    if (!query) {
      return firestorePlants;
    }

    return firestorePlants.filter((plant) => {
      const commonName =
        plant.commonName?.toLowerCase() || "";

      const localName =
        plant.localName?.toLowerCase() || "";

      const scientificName =
        plant.scientificName?.toLowerCase() || "";

      const family =
        plant.family?.toLowerCase() || "";

      const genus =
        plant.genus?.toLowerCase() || "";

      const species =
        plant.species?.toLowerCase() || "";

      const location =
        plant.location?.toLowerCase() || "";

      const state =
        plant.state?.toLowerCase() || "";

      const status =
        plant.status?.toLowerCase() || "";

      return (
        commonName.includes(query) ||
        localName.includes(query) ||
        scientificName.includes(query) ||
        family.includes(query) ||
        genus.includes(query) ||
        species.includes(query) ||
        location.includes(query) ||
        state.includes(query) ||
        status.includes(query)
      );
    });
  }, [searchTerm, firestorePlants]);


  // ==========================================================
  // STATISTICS
  // ==========================================================

  const plantCount = firestorePlants.length;

  const locationCount = new Set(
    firestorePlants
      .filter(
        (plant) =>
          Number.isFinite(
            Number(plant.latitude)
          ) &&
          Number.isFinite(
            Number(plant.longitude)
          )
      )
      .map(
        (plant) =>
          `${plant.latitude},${plant.longitude}`
      )
  ).size;

  const familyCount = new Set(
    firestorePlants
      .map((plant) => plant.family)
      .filter(Boolean)
  ).size;


  // ==========================================================
  // LOADING
  // ==========================================================

  if (loading) {
    return (
      <section
        className="biodiversity-section"
        id="map"
      >
        <div className="biodiversity-bg" />

        <div className="biodiversity-inner section-inner">

          <div className="biodiversity-content">

            <div className="biodiversity-eyebrow">
              <Leaf size={15} />

              <span>
                LIVE BIODIVERSITY MAP
              </span>
            </div>

            <h2>
              Explore Flora
              <br />
              Across <em>Telangana.</em>
            </h2>

            <p>
              Loading botanical observations from
              the TAXOFLORA digital archive...
            </p>

          </div>


          <div className="biodiversity-map-wrapper biodiversity-loading">

            <Leaf size={34} />

            <span>
              Loading biodiversity data...
            </span>

          </div>

        </div>
      </section>
    );
  }


  // ==========================================================
  // ERROR
  // ==========================================================

  if (error) {
    return (
      <section
        className="biodiversity-section"
        id="map"
      >
        <div className="biodiversity-bg" />

        <div className="biodiversity-inner section-inner">

          <div className="biodiversity-content">

            <div className="biodiversity-eyebrow">
              <Leaf size={15} />

              <span>
                LIVE BIODIVERSITY MAP
              </span>
            </div>

            <h2>
              Explore Flora
              <br />
              Across <em>Telangana.</em>
            </h2>

            <p>
              {error}
            </p>

          </div>

        </div>
      </section>
    );
  }


  // ==========================================================
  // MAIN
  // ==========================================================

  return (
    <section
      className="biodiversity-section"
      id="map"
    >

      {/* BACKGROUND */}

      <div className="biodiversity-bg" />


      {/* MAIN CONTENT */}

      <div className="biodiversity-inner section-inner">


        {/* ====================================================
            LEFT CONTENT
            ==================================================== */}

        <div className="biodiversity-content">

          <div className="biodiversity-eyebrow">

            <Leaf size={15} />

            <span>
              LIVE BIODIVERSITY MAP
            </span>

          </div>


          <h2>
            Explore Flora
            <br />
            Across <em>Telangana.</em>
          </h2>


          <p>
            Discover plant habitats plotted using
            geographic coordinates. Search the
            TAXOFLORA collection by plant name,
            scientific name, family, genus,
            region, or conservation status.
          </p>


          {/* BUTTONS */}

          <div className="biodiversity-actions">

            <a
              href="/collection"
              className="biodiversity-primary"
            >
              <span>
                View Full Collection
              </span>

              <ArrowUpRight size={17} />
            </a>


            <a
              href="#"
              className="biodiversity-secondary"
            >

              <span className="biodiversity-play">

                <Play
                  size={11}
                  fill="currentColor"
                />

              </span>

              <span>
                Watch Demo
              </span>

            </a>

          </div>


          {/* STATISTICS */}

          <div className="biodiversity-stats">

            <div className="biodiversity-stat">

              <Leaf size={21} />

              <strong>
                {plantCount}
              </strong>

              <span>
                PLANTS DOCUMENTED
              </span>

            </div>


            <div className="biodiversity-stat">

              <MapPin size={21} />

              <strong>
                {locationCount}
              </strong>

              <span>
                LOCATIONS MAPPED
              </span>

            </div>


            <div className="biodiversity-stat">

              <TreePine size={21} />

              <strong>
                {familyCount}
              </strong>

              <span>
                PLANT FAMILIES
              </span>

            </div>


            <div className="biodiversity-stat">

              <MapPin size={21} />

              <strong>
                {plantCount}
              </strong>

              <span>
                FIELD OBSERVATIONS
              </span>

            </div>

          </div>

        </div>


        {/* ====================================================
            RIGHT MAP
            ==================================================== */}

        <div className="biodiversity-map-wrapper">


          {/* MAP TOP BAR */}

          <div className="map-topbar">


            {/* OBSERVATIONS */}

            <div className="map-observation-count">

              <div className="map-count-icon">
                <Leaf size={20} />
              </div>

              <div>

                <strong>
                  {plantCount}
                </strong>

                <span>
                  Plant Observations
                </span>

              </div>

            </div>


            {/* SEARCH */}

            <div className="map-search">

              <Search size={16} />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search plant..."
                aria-label="Search plant"
              />

              {searchTerm && (

                <button
                  type="button"
                  className="map-search-clear"
                  onClick={() =>
                    setSearchTerm("")
                  }
                  aria-label="Clear search"
                >

                  <X size={14} />

                </button>

              )}

            </div>


            {/* REGION */}

            <div className="map-region">

              <MapPin size={14} />

              <span>
                Telangana
              </span>

            </div>

          </div>


          {/* SEARCH RESULT */}

          {searchTerm.trim() && (

            <div
              className={
                searchResults.length > 0
                  ? "map-search-result found"
                  : "map-search-result not-found"
              }
            >

              {searchResults.length > 0 ? (

                <>
                  <Leaf size={14} />

                  <span>
                    {searchResults.length}{" "}
                    {searchResults.length === 1
                      ? "plant"
                      : "plants"}{" "}
                    found
                  </span>
                </>

              ) : (

                <>
                  <Search size={14} />

                  <span>
                    Plant Not Found
                  </span>
                </>

              )}

            </div>

          )}


          {/* ==================================================
              LEAFLET MAP
              ================================================== */}

          <MapContainer
            center={[
              17.385,
              78.4867,
            ]}
            zoom={7}
            zoomControl={false}
            scrollWheelZoom={true}
            className="biodiversity-map"
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <ZoomControl
              position="bottomright"
            />


            {/* =================================================
                PLANT HABITAT MARKERS
                ================================================= */}

            {searchResults.map((plant) => {

              const latitude =
                Number(plant.latitude);

              const longitude =
                Number(plant.longitude);


              // Ignore invalid GPS records.

              if (
                !Number.isFinite(latitude) ||
                !Number.isFinite(longitude)
              ) {
                return null;
              }


              // Marker color is based on
              // conservation status.

              const statusColor =
                getStatusColor(
                  plant.status
                );


              return (

                <CircleMarker
                  key={plant.id}
                  center={[
                    latitude,
                    longitude,
                  ]}
                  radius={9}
                  pathOptions={{
                    color: "#ffffff",
                    weight: 2,
                    fillColor: statusColor,
                    fillOpacity: 0.95,
                  }}
                >

                  <Popup>

                    <div className="map-popup">

                      <div
                        className="map-popup-icon"
                        style={{
                          backgroundColor:
                            statusColor,
                        }}
                      >

                        <Leaf size={15} />

                      </div>


                      <div className="map-popup-info">

                        <strong>
                          {plant.commonName ||
                            plant.id}
                        </strong>


                        {plant.scientificName && (

                          <em>
                            {plant.scientificName}
                          </em>

                        )}


                        {plant.family && (

                          <span>
                            Family:{" "}
                            {plant.family}
                          </span>

                        )}


                        {plant.status && (

                          <span>
                            Conservation Status:{" "}
                            <strong>
                              {plant.status}
                            </strong>
                          </span>

                        )}


                        <div className="map-popup-location">

                          <MapPin size={11} />

                          <span>
                            {plant.location ||
                              plant.state ||
                              "Field habitat"}
                          </span>

                        </div>


                        <div className="map-popup-coordinates">

                          <div>

                            <small>
                              LATITUDE
                            </small>

                            <strong>
                              {plant.latitude}
                            </strong>

                          </div>


                          <div>

                            <small>
                              LONGITUDE
                            </small>

                            <strong>
                              {plant.longitude}
                            </strong>

                          </div>

                        </div>

                      </div>

                    </div>

                  </Popup>

                </CircleMarker>

              );

            })}

          </MapContainer>


          {/* ==================================================
              CONSERVATION STATUS LEGEND
              ================================================== */}

          <div className="map-legend">

            <div className="map-legend-title">

              <span>
                CONSERVATION STATUS
              </span>

            </div>


            <div className="map-legend-items">

              {statuses.map((status) => {

                const statusColor =
                  getStatusColor(status);

                return (

                  <div
                    className="map-legend-item"
                    key={status}
                  >

                    <span
                      className="map-legend-dot"
                      style={{
                        backgroundColor:
                          statusColor,

                        boxShadow:
                          `0 0 0 2px ${statusColor}22`,
                      }}
                    />

                    <span>
                      {status}
                    </span>

                  </div>

                );

              })}

            </div>


            <div className="map-legend-visible">

              <span>
                {searchResults.length}
              </span>

              <span>
                {searchResults.length === 1
                  ? "Plant Visible"
                  : "Plants Visible"}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BiodiversityMap;