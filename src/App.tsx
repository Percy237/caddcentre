import About from "./components/About";
import CourseCard from "./components/CourseCard";
import FeaturedCourses from "./components/FeaturedCourses";
import HereFromOurStudent from "./components/HereFromOurStudent";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import TrainingPartners from "./components/TrainingPartners";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedCourses />
      <HereFromOurStudent />
      <Statistics />
      <TrainingPartners />
    </>
  );
}

export default App;
