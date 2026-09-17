import { useMemo, useState } from "react";
import {
  Search,
  ArrowUpRight,
  MapPin,
  Leaf,
  X,
} from "lucide-react";

import plants from "../data/plants";
import "../css/ExploreFlora.css";

function ExploreFlora() {
  const [search, setSearch] = useState("");

  const filteredPlants = useMemo(() => {
    const query = search.trim().toLowerCase();

    // HOME PAGE:
    // No search = show ONLY 4 plants
    if (!query) {
      return plants.slice(0, 4);
    }

    // SEARCH:
    // Search the COMPLETE database of 100+ plants
    return plants.filter((plant) => {
      return (
        plant.commonName?.toLowerCase().includes(query) ||
        plant.scientificName?.toLowerCase().includes(query) ||
        plant.family?.toLowerCase().includes(query) ||
        plant.genus?.toLowerCase().includes(query) ||
        plant.location?.toLowerCase().includes(query) ||
        plant.state?.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <section
      className="explore-section section"
      id="explore"
    >
      {/* Background */}
      <div className="explore-bg" />

      <div className="explore-inner section-inner">

        {/* ================================
            HEADING
        ================================= */}

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


        {/* ================================
            SEARCH
        ================================= */}

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


        {/* ================================
            META
        ================================= */}

        <div className="explore-meta">

          <div>

            <span>
              COLLECTION
            </span>

            <strong>
              {plants.length}+ Plant Observations
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


        {/* ================================
            NOT FOUND
        ================================= */}

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

          /* ================================
              PLANT GRID
          ================================= */

          <div className="flora-grid">

            {filteredPlants.map((plant, index) => (

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
                      plants.findIndex(
                        (item) =>
                          item.id === plant.id
                      ) + 1
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

            ))}

          </div>

        )}


        {/* ================================
            FOOTER
        ================================= */}

        <div className="explore-footer">

          <span>
            {search
              ? `Showing ${filteredPlants.length} matching ${
                  filteredPlants.length === 1
                    ? "observation"
                    : "observations"
                }`
              : `Showing ${Math.min(
                  plants.length,
                  4
                )} featured plants of ${plants.length}+ observations`}
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