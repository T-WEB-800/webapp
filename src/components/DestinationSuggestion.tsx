
const DestinationSuggestionComponent = () => {
  const destinations = [
    {
      name: 'Paris',
      description: 'The city of love and lights, known for its romantic ambiance, iconic landmarks like the Eiffel Tower, and world-class cuisine.',
      popularity: 'High',
    },
    {
      name: 'London',
      description: 'A vibrant metropolis blending rich history with modernity, featuring landmarks such as Big Ben, Buckingham Palace, and diverse cultural experiences.',
      popularity: 'Low',
    },
    {
      name: 'New York',
      description: 'The city that never sleeps, offering endless opportunities for exploration, entertainment, and cultural diversity with landmarks like Times Square and Central Park.',
      popularity: 'Mid',
    },
    {
      name: 'Tokyo',
      description: 'A bustling metropolis renowned for its blend of traditional and modern culture, featuring iconic sights like the Tokyo Tower, historic temples, and vibrant neighborhoods.',
      popularity: 'High',
    },
    {
      name: 'Seoul',
      description: 'A bustling metropolis renowned for its blend of traditional and modern culture, featuring iconic sights like the Tokyo Tower, historic temples, and vibrant neighborhoods.',
      popularity: 'Very High',
    },
    {
      name: 'Bangkok',
      description: 'A bustling metropolis renowned for its blend of traditional and modern culture, featuring iconic sights like the Tokyo Tower, historic temples, and vibrant neighborhoods.',
      popularity: 'High',
    },
  ];

  return (
    <div className="p-14 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div key={destination.name} className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">{destination.name}</h2>
              <p className="text-sm mb-4">{destination.description}</p>
              <div className="flex items-center mb-4">
                <span className="mr-2 font-bold">Popularity:</span>
                <div className={`w-16 h-2 bg-green-500 rounded-full`} /> {/* Adjust this based on popularity */}
              </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-auto">
              Explore {destination.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSuggestionComponent;
