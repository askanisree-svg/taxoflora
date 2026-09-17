import { Leaf, MapPin } from "lucide-react";

function PlantCard({ plant }) {
  return (
    <article className="plant-card">

      <div className="plant-image">
        <Leaf size={45} />
      </div>

      <div className="plant-card-content">

        <span className="plant-number">
          SPECIMEN
        </span>

        <h3>{plant.name}</h3>

        <em>{plant.scientific}</em>

        <p>{plant.family}</p>

        <div className="plant-location">
          <MapPin size={15} />
          Telangana
        </div>

      </div>

    </article>
  );
}

export default PlantCard;