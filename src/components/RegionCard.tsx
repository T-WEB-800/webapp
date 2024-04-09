import React from 'react';

const regions = [
  { name: 'Auvergne Rhone Alpes', image: '' }, // Add your image path
  { name: 'Bourgogne Franche Comté', image: '' }, // Add your image path
  { name: 'Bretagne', image: '' }, // Add your image path
  { name: 'Centre Val de Loire', image: '' }, // Add your image path
  { name: 'Corse', image: '' }, // Add your image path
  { name: 'Grand Est', image: '' } // Add your image path
];

const RegionCard = ({ region }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
    <div className="bg-cover bg-center h-32 w-full" style={{ backgroundImage: `url(${region.image})` }}>
      {/* Background image will go here */}
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">{region.name}</div>
    </div>
  </div>
);

const RegionsGrid = () => (
  <div className="container mx-auto px-4 py-6">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {regions.map((region, index) => (
        <RegionCard key={index} region={region} />
      ))}
    </div>
  </div>
);

export default RegionsGrid;
