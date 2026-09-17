import "../css/HowItWorks.css";

const steps = [
  {
    number: "01",
    image: "/assets/how-it-works/field-data.webp",
    title: "Field Data",
    text: "Capture plant images with GPS location and field details.",
  },
  {
    number: "02",
    image: "/assets/how-it-works/digital-record.webp",
    title: "Digital Record",
    text: "Store and manage plant data securely with Firebase and React.js.",
  },
  {
    number: "03",
    image: "/assets/how-it-works/explore-flora.webp",
    title: "Explore & Identify",
    text: "Search plant specimens by family, local name, or region.",
  },
  {
    number: "04",
    image: "/assets/how-it-works/conservation.webp",
    title: "Conservation Impact",
    text: "Geo-tag plant habitats to understand regional biodiversity.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section section" id="how-it-works">
      <div className="how-bg" />

      <div className="how-inner section-inner">
        <div className="section-heading">
          <span>HOW IT WORKS</span>

          <h2>
            From Field to a
            <em> Greener Future.</em>
          </h2>

          <p>
            Turning real-world plant observations into meaningful
            conservation impact through modern web technology.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => (
            <article className="how-card" key={step.number}>
              <div className="how-image">
                <img src={step.image} alt={step.title} />

                <div className="how-image-overlay" />

                <span className="how-number">{step.number}</span>
              </div>

              <div className="how-card-body">
                <h3>{step.title}</h3>

                <p>{step.text}</p>

                <span className="how-line" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;