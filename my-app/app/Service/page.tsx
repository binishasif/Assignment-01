import React from "react";
import Designing from "./Designing/page";
import Web from "./web/page";

export default function Service() {
  return (
    <div>
      <div className="bg-cyan-400 text-black text-center py-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="mb-6">Explore our offerings in graphic design and web development.</p>
        
        <div className="flex justify-center space-x-4">
          <a href="/designing">
            <button className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-300">
              Graphic Design
            </button>
          </a>
          <a href="/web">
            <button className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-300">
              Web Development
            </button>
          </a>
        </div>
      </div>
      
      <Designing />
      {/* Uncomment the next line if you want to render the Web component */}
      {/* <Web /> */}
    </div>
  );
}