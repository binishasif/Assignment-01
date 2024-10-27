import React from 'react';
import About from './about/page';
import Service from './Service/page';
import Contact from './contact/page';

const Home= () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-cyan-300 text-white">
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">Hello, I'm Binish</h1>
        <p className="text-2xl font-semibold mb-6 text-black">Web Developer & Graphic Designer</p>
        <button className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-300">
          Learn More About Me
        </button>
      </div>

      <About />
      <Service />
      <Contact />
      <footer className="text-center py-6 bg-black text-white mt-10">
        <p className="text-sm">&copy; 2024 Binish. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
