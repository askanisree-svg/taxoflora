import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import BiodiversityMap from "./components/BiodiversityMap";
import ExploreFlora from "./components/ExploreFlora";
import Herbarium from "./components/Herbarium";
import Contribute from "./components/Contribute";
import About from "./components/About";
import Footer from "./components/Footer";

import PlantCollection from "./pages/PlantCollection";
import AddSpecimen from "./pages/AddSpecimen";

import "./App.css";


function HomePage() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <HowItWorks />

        <BiodiversityMap />

        <ExploreFlora />

        <Herbarium />

        <Contribute />

        <About />

      </main>

      <Footer />

    </div>
  );
}


function App() {

  const currentPath = window.location.pathname;


  // Hidden full plant collection
  if (currentPath === "/collection") {
    return <PlantCollection />;
  }


  // Hidden Add Specimen form
  if (currentPath === "/add-specimen") {
    return <AddSpecimen />;
  }


  // Home
  return <HomePage />;
}


export default App;