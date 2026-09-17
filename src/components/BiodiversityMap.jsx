import {
  ArrowUpRight,
  Leaf,
  MapPin,
  Play,
  Search,
  TreePine,
} from "lucide-react";

import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import { useMemo, useState } from "react";

import "leaflet/dist/leaflet.css";
import "../css/BiodiversityMap.css";

import plants from "../data/plants";

function BiodiversityMap() {
  const [searchTerm, setSearchTerm] = useState("");

  /*
   * =========================================================
   * SEARCH
   * =========================================================
   *
   * Searches:
   * - Common name
   * - Scientific name
   * - Family
   * - Genus
   *
   */

  const searchResults = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return plants;
    }

    return plants.filter((plant) => {
      const commonName =
        plant.commonName?.toLowerCase() || "";

      const scientificName =
        plant.scientificName?.toLowerCase() || "";

      const family =
        plant.family?.toLowerCase() || "";

      const genus =
        plant.genus?.toLowerCase() || "";

      return (
        commonName.includes(query) ||
        scientificName.includes(query) ||
        family.includes(query) ||
        genus.includes(query)
      );
    });
  }, [searchTerm]);


  /*
   * =========================================================
   * STATISTICS
   * =========================================================
   */

  const plantCount = plants.length;

  const locationCount = new Set(
    plants.map(
      (plant) =>
        `${plant.latitude},${plant.longitude}`
    )
  ).size;

  const familyCount = new Set(
    plants
      .map((plant) => plant.family)
      .filter(Boolean)
  ).size;


  return (
    <section
      className="biodiversity-section"
      id="map"
    >

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="biodiversity-bg" />


      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="biodiversity-inner section-inner">


        {/* ===================================================
            LEFT CONTENT
            =================================================== */}

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
            Discover plant observations plotted using
            geographic coordinates. Search the TAXOFLORA
            collection by plant name, scientific name,
            family, or genus.
          </p>


          {/* =================================================
              BUTTONS
              ================================================= */}

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


          {/* =================================================
              STATISTICS
              ================================================= */}

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


        {/* ===================================================
            RIGHT MAP
            =================================================== */}

        <div className="biodiversity-map-wrapper">


          {/* =================================================
              MAP TOP BAR
              ================================================= */}

          <div className="map-topbar">


            {/* OBSERVATION COUNT */}

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
                  setSearchTerm(event.target.value)
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
                  ×
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


          {/* =================================================
              SEARCH RESULT
              ================================================= */}

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


          {/* =================================================
              LEAFLET MAP
              ================================================= */}

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
                PLANT MARKERS
                ================================================= */}

            {searchResults.map((plant) => {

              const latitude =
                Number(plant.latitude);

              const longitude =
                Number(plant.longitude);

              /*
               * Don't render invalid GPS records.
               */

              if (
                !Number.isFinite(latitude) ||
                !Number.isFinite(longitude)
              ) {
                return null;
              }

              return (

                <CircleMarker
                  key={plant.id}
                  center={[
                    latitude,
                    longitude,
                  ]}
                  radius={8}
                  pathOptions={{
                    color: "#ffffff",
                    weight: 2,
                    fillColor: "#a8f27f",
                    fillOpacity: 1,
                  }}
                >

                  <Popup>

                    <div className="map-popup">

                      <div className="map-popup-icon">
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


                        <div className="map-popup-location">
                          <MapPin size={11} />

                          <span>
                            {plant.location ||
                              plant.state ||
                              "Field observation"}
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


          {/* =================================================
              LEGEND
              ================================================= */}

          <div className="map-legend">

            <span className="map-legend-dot" />

            <span>
              {searchResults.length}{" "}
              {searchResults.length === 1
                ? "Plant"
                : "Plants"}{" "}
              Visible
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BiodiversityMap;