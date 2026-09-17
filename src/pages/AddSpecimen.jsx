import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  Upload,
  Leaf,
  MapPin,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import "./AddSpecimen.css";

function AddSpecimen() {
  const [formData, setFormData] = useState({
    commonName: "",
    scientificName: "",
    family: "",
    genus: "",
    location: "",
    state: "Telangana",
    latitude: "",
    longitude: "",
    status: "Least Concern",
    observationDate: "",
    description: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPlant = {
      id: `plant-${Date.now()}`,
      commonName: formData.commonName,
      scientificName: formData.scientificName,
      family: formData.family,
      genus: formData.genus,
      location: formData.location,
      state: formData.state,
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
      observationDate: formData.observationDate,
      status: formData.status,
      image: "",
      description: formData.description,
    };

    /*
     * Store the submitted observation locally.
     * This keeps the record available in the browser.
     */
    const existingPlants = JSON.parse(
      localStorage.getItem("taxoflora-added-plants") || "[]"
    );

    existingPlants.push(newPlant);

    localStorage.setItem(
      "taxoflora-added-plants",
      JSON.stringify(existingPlants)
    );

    setSaved(true);

    console.log("New TAXOFLORA specimen:", newPlant);
    console.log("Uploaded image:", imageFile?.name || "No image");
  };

  return (
    <main className="add-specimen-page">

      {/* BACKGROUND */}
      <div className="add-specimen-bg" />

      <div className="add-specimen-overlay" />


      {/* CONTENT */}
      <div className="add-specimen-content">

        {/* BACK */}
        <a
          href="/"
          className="add-specimen-back"
        >
          <ArrowLeft size={18} />
          Back to TAXOFLORA
        </a>


        {/* HEADER */}
        <header className="add-specimen-header">

          <span className="add-specimen-eyebrow">
            <Leaf size={15} />
            NEW OBSERVATION
          </span>

          <h1>
            Add a Digital
            <em> Specimen.</em>
          </h1>

          <p>
            Add a new plant observation to the TAXOFLORA
            digital botanical collection.
          </p>

        </header>


        {/* FORM CARD */}
        <form
          className="specimen-form"
          onSubmit={handleSubmit}
        >

          {/* FORM TOP */}
          <div className="specimen-form-top">

            <div>
              <span className="form-label-small">
                TAXOFLORA
              </span>

              <h2>
                Digital Specimen
              </h2>
            </div>

            <div className="form-status">
              <span />
              READY
            </div>

          </div>


          {/* ================================
              BASIC INFORMATION
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">
              <Leaf size={17} />

              <div>
                <span>
                  01
                </span>

                <h3>
                  Plant Information
                </h3>
              </div>
            </div>


            <div className="form-grid">

              {/* COMMON NAME */}
              <div className="form-field">

                <label htmlFor="commonName">
                  Common / Local Name
                </label>

                <input
                  id="commonName"
                  name="commonName"
                  type="text"
                  value={formData.commonName}
                  onChange={handleChange}
                  placeholder="Example: Neem"
                  required
                />

              </div>


              {/* SCIENTIFIC NAME */}
              <div className="form-field">

                <label htmlFor="scientificName">
                  Scientific Name
                </label>

                <input
                  id="scientificName"
                  name="scientificName"
                  type="text"
                  value={formData.scientificName}
                  onChange={handleChange}
                  placeholder="Example: Azadirachta indica"
                />

              </div>


              {/* FAMILY */}
              <div className="form-field">

                <label htmlFor="family">
                  Plant Family
                </label>

                <input
                  id="family"
                  name="family"
                  type="text"
                  value={formData.family}
                  onChange={handleChange}
                  placeholder="Example: Meliaceae"
                />

              </div>


              {/* GENUS */}
              <div className="form-field">

                <label htmlFor="genus">
                  Genus
                </label>

                <input
                  id="genus"
                  name="genus"
                  type="text"
                  value={formData.genus}
                  onChange={handleChange}
                  placeholder="Example: Azadirachta"
                />

              </div>

            </div>

          </div>


          {/* ================================
              LOCATION
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <MapPin size={17} />

              <div>
                <span>
                  02
                </span>

                <h3>
                  Observation Location
                </h3>
              </div>

            </div>


            <div className="form-grid">

              {/* REGION */}
              <div className="form-field">

                <label htmlFor="location">
                  Region / Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Example: Deshmukhi"
                  required
                />

              </div>


              {/* STATE */}
              <div className="form-field">

                <label htmlFor="state">
                  State
                </label>

                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Example: Telangana"
                />

              </div>


              {/* LATITUDE */}
              <div className="form-field">

                <label htmlFor="latitude">
                  Latitude
                </label>

                <input
                  id="latitude"
                  name="latitude"
                  type="number"
                  step="any"
                  value={formData.latitude}
                  onChange={handleChange}
                  placeholder="17.335637"
                  required
                />

              </div>


              {/* LONGITUDE */}
              <div className="form-field">

                <label htmlFor="longitude">
                  Longitude
                </label>

                <input
                  id="longitude"
                  name="longitude"
                  type="number"
                  step="any"
                  value={formData.longitude}
                  onChange={handleChange}
                  placeholder="78.732150"
                  required
                />

              </div>

            </div>

          </div>


          {/* ================================
              OBSERVATION
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <CalendarDays size={17} />

              <div>
                <span>
                  03
                </span>

                <h3>
                  Observation Details
                </h3>
              </div>

            </div>


            <div className="form-grid">

              {/* STATUS */}
              <div className="form-field">

                <label htmlFor="status">
                  Conservation Status
                </label>

                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>
                    Least Concern
                  </option>

                  <option>
                    Common
                  </option>

                  <option>
                    Recorded
                  </option>

                  <option>
                    Near Threatened
                  </option>

                  <option>
                    Vulnerable
                  </option>

                  <option>
                    Endangered
                  </option>

                  <option>
                    Critically Endangered
                  </option>
                </select>

              </div>


              {/* DATE */}
              <div className="form-field">

                <label htmlFor="observationDate">
                  Observation Date
                </label>

                <input
                  id="observationDate"
                  name="observationDate"
                  type="date"
                  value={formData.observationDate}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* FIELD NOTES */}
            <div className="form-field form-field-full">

              <label htmlFor="description">
                Field Notes
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the plant, habitat and observations..."
                rows="5"
              />

            </div>

          </div>


          {/* ================================
              IMAGE UPLOAD
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <Camera size={17} />

              <div>
                <span>
                  04
                </span>

                <h3>
                  Specimen Photograph
                </h3>
              </div>

            </div>


            <label
              htmlFor="specimenImage"
              className={`upload-box ${
                imagePreview ? "has-image" : ""
              }`}
            >

              {imagePreview ? (

                <div className="upload-preview">

                  <img
                    src={imagePreview}
                    alt="Specimen preview"
                  />

                  <div className="upload-preview-overlay">

                    <Upload size={20} />

                    <span>
                      Change Image
                    </span>

                  </div>

                </div>

              ) : (

                <div className="upload-empty">

                  <div className="upload-icon">
                    <Camera size={28} />
                  </div>

                  <h3>
                    Upload Specimen Image
                  </h3>

                  <p>
                    Add a clear photograph of the
                    plant specimen
                  </p>

                  <span className="choose-image">
                    Choose Image
                  </span>

                  <small>
                    JPG, PNG or WEBP
                  </small>

                </div>

              )}

              <input
                id="specimenImage"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
              />

            </label>

          </div>


          {/* ================================
              ACTIONS
          ================================= */}

          <div className="specimen-actions">

            <a
              href="/"
              className="cancel-specimen"
            >
              Cancel
            </a>

            <button
              type="submit"
              className="save-specimen"
            >
              <Leaf size={17} />

              Save Digital Specimen

              <ArrowUpRight size={17} />
            </button>

          </div>


          {/* SUCCESS */}
          {saved && (
            <div className="specimen-success">

              <CheckCircle2 size={20} />

              <div>
                <strong>
                  Specimen Saved
                </strong>

                <span>
                  The observation has been added to
                  your local TAXOFLORA archive.
                </span>
              </div>

              <a href="/collection">
                View Collection
              </a>

            </div>
          )}

        </form>

      </div>

    </main>
  );
}

export default AddSpecimen;