import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Search,
  MapPin,
  CalendarDays,
  Leaf,
  X
} from "lucide-react";

import plants from "../data/plants";
import "./PlantCollection.css";

function PlantCollection() {
  const [search, setSearch] = useState("");

  const filteredPlants = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return plants;
    }

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
    <main className="collection-page">
      {/* Background */}
      <div className="collection-bg" />

      <div className="collection-overlay" />

      <div className="collection-content">
        {/* Header */}
        <header className="collection-header">
          <a href="/#explore" className="collection-back">
            <ArrowLeft size={18} />
            <span>Back to Explore</span>
          </a>

          <div className="collection-title">
            <span className="collection-eyebrow">
              <Leaf size={15} />
              TAXOFLORA ARCHIVE
            </span>

            <h1>
              Full Plant <em>Collection</em>
            </h1>

            <p>
              Explore the complete digital botanical archive and field
              observations.
            </p>
          </div>

          <div className="collection-count">
            <strong>{plants.length}</strong>
            <span>Plants</span>
          </div>
        </header>

        {/* Search */}
        <div className="collection-toolbar">
          <div className="collection-search">
            <Search size={19} />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search plant, scientific name, family, genus or location..."
              aria-label="Search plants"
            />

            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="collection-result">
            {filteredPlants.length}{" "}
            {filteredPlants.length === 1 ? "result" : "results"}
          </div>
        </div>

        {/* Search Result */}
        {filteredPlants.length === 0 ? (
          <section className="collection-empty">
            <div className="empty-icon">
              <Search size={30} />
            </div>

            <h2>Plant Not Found</h2>

            <p>
              No plant in the TAXOFLORA collection matches{" "}
              <strong>"{search}"</strong>.
            </p>

            <button
              type="button"
              className="empty-button"
              onClick={() => setSearch("")}
            >
              View All Plants
            </button>
          </section>
        ) : (
          <section className="collection-grid">
            {filteredPlants.map((plant) => (
              <article className="collection-card" key={plant.id}>
                {/* Image */}
                <div className="collection-image">
                  {plant.image ? (
                    <img
                      src={plant.image}
                      alt={plant.commonName || plant.scientificName}
                    />
                  ) : (
                    <div className="collection-image-placeholder">
                      <Leaf size={48} strokeWidth={1.2} />
                      <span>Plant Photograph</span>
                    </div>
                  )}

                  <div className="collection-number">
                    {String(
                      plants.findIndex((item) => item.id === plant.id) + 1
                    ).padStart(2, "0")}
                  </div>

                  {plant.status && (
                    <span className="plant-status">
                      {plant.status}
                    </span>
                  )}
                </div>

                {/* Information */}
                <div className="collection-card-body">
                  <span className="plant-family">
                    {plant.family || "Plant Family"}
                  </span>

                  <h2>
                    {plant.commonName || "Unnamed Plant"}
                  </h2>

                  <p className="plant-scientific">
                    {plant.scientificName || "Scientific name unavailable"}
                  </p>

                  <div className="plant-divider" />

                  <div className="plant-details">
                    <div className="plant-detail">
                      <MapPin size={16} />

                      <div>
                        <span>Coordinates</span>

                        <strong>
                          {plant.latitude !== undefined &&
                          plant.longitude !== undefined
                            ? `${plant.latitude}, ${plant.longitude}`
                            : "Not available"}
                        </strong>
                      </div>
                    </div>

                    <div className="plant-detail">
                      <CalendarDays size={16} />

                      <div>
                        <span>Observation</span>

                        <strong>
                          {plant.observationDate || "Not available"}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="plant-location">
                    <span>Location</span>

                    <strong>
                      {plant.location || "Unknown"}
                      {plant.state ? `, ${plant.state}` : ""}
                    </strong>
                  </div>

                  {plant.description && (
                    <p className="plant-description">
                      {plant.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

export default PlantCollection;