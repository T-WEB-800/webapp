import React from 'react';

const SuggestionCard = ({ title, image, description }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            {title}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SuggestionsComponent = () => {
  const suggestions = [
    {
      title: 'Hébergement pas cher à Nice',
      image: 'path_to_nice_image.jpg', // replace with your image path
      description: 'Vous êtes à la recherche d’un logement pas cher à Nice? Peu importe qu\'il s\'agisse d\'un hôtel, d\'une auberge ou d\'un appartement de vacances, ce que vous cherchez ne doit pas être trop éloigné de la mer, dans un quartier agréable et surtout sûr. Ne vous inquiétez pas! Nous avons rassemblé ici des hôtels et auberges de jeunesses pour les vacances que vous pouvez réserver sans crainte.'
    },
    {
      title: 'Les plus beaux villages dans le Var à visiter',
      image: 'path_to_var_image.jpg', // replace with your image path
      description: 'Le Var est un département situé en région Provence-Alpes-Côte d\'Azur, dans le sud-est de la France. C’est un des lieux les plus prisés des touristes en été pour la beauté de son littoral, et également pour ses villages typiques provençaux. Si vous n’avez pas encore d’idée pour votre prochaine destination de vacances, voici une liste non exhaustive des plus beaux villages à visiter lors de votre prochain séjour.'
    },
  ];

  return (
    <div className="flex flex-wrap justify-around items-center">
      {suggestions.map(suggestion => (
        <SuggestionCard key={suggestion.title} title={suggestion.title} image={suggestion.image} description={suggestion.description} />
      ))}
    </div>
  );
};

export default SuggestionsComponent;
