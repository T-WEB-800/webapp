import React, { useState } from 'react';

// DropdownButton component
const DropdownButton = ({ text }) => {
  // Placeholder function for dropdown functionality
  const toggleDropdown = () => console.log('Dropdown toggled');
  
  return (
    <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-300">
      {text}
    </button>
  );
};

// Card component
const Card = ({ title, description, address }) => {
  return (
    <div className="border rounded shadow p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-500">{address}</p>
    </div>
  );
};

// Sidebar component
const MapSideBar = () => {
  const [activeTab, setActiveTab] = useState('interests'); // Placeholder for tab state

  // Placeholder data for the cards
  const items = [
    { title: 'La Tour Eiffel', description: 'Bâtiment remarquable', address: 'Paris 75007' },
    { title: 'Musée du quai Branly - Jacques Chirac', description: 'Musée', address: 'Paris 75007' },
    { title: 'Musée de lanus - Jack Fyraq', description: 'Musée', address: 'Paris 75007' },
    { title: 'Musée du Phalus - Jacques Chirac', description: 'Musée', address: 'Paris 75007' },
    // ...add more items here
  ];

  return (
    <aside className="w-80 h-screen bg-white p-4">
      <div className="flex justify-between mb-4">
        <DropdownButton text="Lieux d'intérêts" />
        <DropdownButton text="Filtres" />
      </div>
      <div>
        {items.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} address={item.address} />
        ))}
      </div>
    </aside>
  );
};

export default MapSideBar;
