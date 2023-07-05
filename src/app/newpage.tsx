import React from "react";

const TravelWebsite: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-4xl font-bold text-center">Travel Website</h1>
      </header>
      <main className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Destination 1</h2>
            <img
              src="https://placeimg.com/400/300/nature"
              alt="Destination 1"
              className="mb-4 rounded"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Book Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Destination 2</h2>
            <img
              src="https://placeimg.com/400/300/nature"
              alt="Destination 2"
              className="mb-4 rounded"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Book Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Destination 3</h2>
            <img
              src="https://placeimg.com/400/300/nature"
              alt="Destination 3"
              className="mb-4 rounded"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
              Book Now
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 py-4 mt-8 text-center">
        <p>&copy; 2023 Travel Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TravelWebsite;
