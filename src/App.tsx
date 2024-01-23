import "./App.css";

import HeroSection from "./components/heroSection/HeroSection";
import SportsCategory from "./components/sports/SportsCategory";
import Layout from "./components/custom-components/Layout";
// import TechCategory from "./components/technology/TechCategory";

function App() {
  return (
    <Layout>
      <HeroSection />
      <SportsCategory />
      {/* <TechCategory /> */}
    </Layout>
  );
}

export default App;
