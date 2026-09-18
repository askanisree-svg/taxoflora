import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import {
  Search,
  ArrowUpRight,
  MapPin,
  Leaf,
  X,
} from "lucide-react";

import "../css/ExploreFlora.css";

function ExploreFlora() {
  const [search, setSearch] = useState("");
  const [firestorePlants, setFirestorePlants] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================================
  // LOAD PLANTS FROM FIRESTORE
  // =========================================

  useEffect(() => {
    async function loadPlants() {
      try {
        const snapshot = await getDocs(
          collection(db, "plants")
        );

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFirestorePlants(data);

        console.log(
          "✅ Explore Flora loaded:",
          data.length,
          "plants"
        );
      } catch (error) {
        console.error(
          "❌ Failed to load plants from Firestore:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadPlants();
  }, []);

  // =========================================
  // SEARCH / FILTER
  // =========================================

  const filteredPlants = useMemo(() => {
    const query = search.trim().toLowerCase();

    // HOME PAGE:
    // No search = show only first 4 plants
    if (!query) {
      return firestorePlants.slice(0, 4);
    }

    // SEARCH:
    // Search the complete Firestore collection
    return firestorePlants.filter((plant) => {
      return (
        plant.commonName
          ?.toLowerCase()
          .includes(query) ||

        plant.localName
          ?.toLowerCase()
          .includes(query) ||

        plant.scientificName
          ?.toLowerCase()
          .includes(query) ||

        plant.family
          ?.toLowerCase()
          .includes(query) ||

        plant.genus
          ?.toLowerCase()
          .includes(query) ||

        plant.species
          ?.toLowerCase()
          .includes(query) ||

        plant.location
          ?.toLowerCase()
          .includes(query) ||

        plant.state
          ?.toLowerCase()
          .includes(query) ||

        plant.habitat
          ?.toLowerCase()
          .includes(query)
      );
    });
  }, [search, firestorePlants]);

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <section
        className="explore-section section"
        id="explore"
      >
        <div className="explore-bg" />

        <div className="explore-inner section-inner">
          <div className="section-heading explore-heading">
            <span>EXPLORE OUR FLORA</span>

            <h2>
              A Living Archive of
              <em> Regional Flora.</em>
            </h2>

            <p>
              Loading botanical observations from
              the TAXOFLORA digital archive...
            </p>
          </div>

          <div className="explore-meta">
            <div>
              <span>COLLECTION</span>

              <strong>
                Loading Plant Observations...
              </strong>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =========================================
  // RENDER
  // =========================================

  return (
    <section
      className="explore-section section"
      id="explore"
    >
      {/* Background */}
      <div className="explore-bg" />

      <div className="explore-inner section-inner">

        {/* =================================
            HEADING
        ================================== */}

        <div className="section-heading explore-heading">
          <span>
            EXPLORE OUR FLORA
          </span>

          <h2>
            A Living Archive of
            <em> Regional Flora.</em>
          </h2>

          <p>
            Browse botanical observations collected
            from the field, organized into a searchable
            digital collection.
          </p>
        </div>

        {/* =================================
            SEARCH
        ================================== */}

        <div className="explore-toolbar">
          <div className="explore-search">
            <Search size={18} />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search plants, families, regions..."
              aria-label="Search plants"
            />

            {search && (
              <button
                type="button"
                className="explore-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* =================================
            META
        ================================== */}

        <div className="explore-meta">
          <div>
            <span>
              COLLECTION
            </span>

            <strong>
              {firestorePlants.length}+ Plant Observations
            </strong>
          </div>

          <div className="explore-view">
            <Leaf size={16} />

            <span>
              {search
                ? `${filteredPlants.length} Results`
                : "Featured Collection"}
            </span>
          </div>
        </div>

        {/* =================================
            NOT FOUND
        ================================== */}

        {filteredPlants.length === 0 ? (
          <div className="explore-not-found">

            <div className="explore-not-found-icon">
              <Search size={30} />
            </div>

            <h3>
              Plant Not Found
            </h3>

            <p>
              No plant matching{" "}
              <strong>"{search}"</strong>{" "}
              was found in the TAXOFLORA collection.
            </p>

            <button
              type="button"
              className="explore-clear-button"
              onClick={() => setSearch("")}
            >
              View Featured Plants
            </button>

          </div>
        ) : (

          /* =================================
              PLANT GRID
          ================================== */

          <div className="flora-grid">

            {filteredPlants.map((plant, index) => {

              const actualIndex =
                firestorePlants.findIndex(
                  (item) => item.id === plant.id
                );

              return (
                <article
                  className="flora-card"
                  key={plant.id}
                >

                  {/* IMAGE */}

                  <div className="flora-image">

                    {plant.image ? (
                      <img
                        src={plant.image}
                        alt={
                          plant.commonName ||
                          "Plant specimen"
                        }
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />
                    ) : (
                      <div className="flora-placeholder">

                        <Leaf
                          size={48}
                          strokeWidth={1}
                        />

                        <span>
                          {plant.commonName ||
                            `PLANT ${index + 1}`}
                        </span>

                      </div>
                    )}

                    <div className="flora-image-overlay" />

                    {/* NUMBER */}

                    <span className="flora-number">
                      {String(
                        actualIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    {/* ARROW */}

                    <a
                      href="/collection"
                      className="flora-arrow"
                      aria-label={`View ${
                        plant.commonName ||
                        "plant"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </a>

                  </div>

                  {/* CONTENT */}

                  <div className="flora-card-content">

                    <span className="flora-family">
                      {plant.family ||
                        "Plant Family"}
                    </span>

                    <h3>
                      {plant.commonName ||
                        "Unnamed Plant"}
                    </h3>

                    <em>
                      {plant.scientificName ||
                        "Scientific name unavailable"}
                    </em>

                    {/* LOCAL NAME */}

                    {plant.localName && (
                      <div className="flora-local-name">
                        Local name:{" "}
                        <strong>
                          {plant.localName}
                        </strong>
                      </div>
                    )}

                    {/* COORDINATES */}

                    <div className="flora-location">

                      <MapPin size={14} />

                      <div>

                        <span>
                          Coordinates
                        </span>

                        <strong>
                          {plant.latitude !== undefined &&
                          plant.longitude !== undefined
                            ? `${plant.latitude}, ${plant.longitude}`
                            : "Not available"}
                        </strong>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        )}

        {/* =================================
            FOOTER
        ================================== */}

        <div className="explore-footer">

          <span>
            {search
              ? `Showing ${filteredPlants.length} matching ${
                  filteredPlants.length === 1
                    ? "observation"
                    : "observations"
                }`
              : `Showing ${Math.min(
                  firestorePlants.length,
                  4
                )} featured plants of ${
                  firestorePlants.length
                }+ observations`}
          </span>

          <a
            href="/collection"
            className="explore-more"
          >
            View Full Collection

            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default ExploreFlora;