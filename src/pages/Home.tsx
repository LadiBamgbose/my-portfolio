import Hero from '../components/Hero';
import Projects from '../components/Projects';

// Home page with Hero and Projects sections
const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section - Fades on scroll */}
      <Hero />

      {/* Projects Section */}
      <Projects />
    </div>
  );
};

export default Home;
