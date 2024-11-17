import React from 'react';

const Home = () => {
  // Array of expense categories
  const categories = ['Clothing', 'Travel', 'Food', 'Education'];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md text-center hover:bg-blue-100 transition-all"
          >
            <h2 className="text-xl font-semibold">{category}</h2>
            <p className="text-gray-500 mt-2">Add expenses for {category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
