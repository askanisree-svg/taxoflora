import { doc, writeBatch } from "firebase/firestore";
import { db } from "./firebase";
import plants from "./data/plants";

export async function importPlants() {
  try {
    const batch = writeBatch(db);

    plants.forEach((plant) => {
      const plantId = plant.id || `plant-${String(plant.id).padStart(3, "0")}`;

      batch.set(doc(db, "plants", plantId), {
        ...plant,
        image:
          plant.image ||
          `/assets/plants/${plantId}.webp`,
      });
    });

    await batch.commit();

    console.log("✅ ALL PLANTS IMPORTED");
    console.log(`🌿 Total plants imported: ${plants.length}`);
  } catch (error) {
    console.error("❌ PLANT IMPORT ERROR:", error);
  }
}