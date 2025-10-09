import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

// Home page with Hero, Projects, and Skills sections
const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section - Fades on scroll */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default Home;
