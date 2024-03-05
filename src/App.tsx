import "./App.css";
import Layout from "./components/custom-components/Layout";
import HeroSection from "./components/heroSection/HeroSection";
import SportsCategory from "./components/sports/SportsCategory";
import TechCategory from "./components/technology/TechCategory";
import Test from "./components/test/Test";

function App() {
  return (
    <div>
      <Layout>
        <HeroSection />
        <SportsCategory />
        <TechCategory />
        <Test />
      </Layout>
    </div>
  );
}

export default App;
