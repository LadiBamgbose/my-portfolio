import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/stars.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <h1 className="text-8xl font-bold text-white drop-shadow-2xl">
          Welcome
        </h1>
      </div>
    </div>
  );
}

export default App;
