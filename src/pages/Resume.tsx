const Resume = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Resume image with gradient border */}
        <div className="p-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl">
          <div className="rounded-3xl overflow-hidden bg-white">
            <img
              src="/resume.png"
              alt="Resume"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

