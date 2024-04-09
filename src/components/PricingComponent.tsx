import React from 'react';

const PricingComponent = () => {
  const plans = [
    {
      name: 'Basic',
      price: '19',
      features: [
        '10 GB of storage',
        'Up to 3 users',
        'Basic support',
        'Email notifications',
      ],
    },
    {
      name: 'Pro',
      price: '39',
      features: [
        '100 GB of storage',
        'Up to 10 users',
        'Priority support',
        'Email and SMS notifications',
      ],
    },
    {
      name: 'Enterprise',
      price: '99',
      features: [
        '1 TB of storage',
        'Unlimited users',
        '24/7 support',
        'Dedicated account manager',
      ],
    },
  ];

  return (
    <div className="p-14 bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white shadow-xl rounded-lg p-6 w-full md:w-1/2 xl:w-1/2"> {/* Adjusted width here */}
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-4">${plan.price}/month</p>
            <ul className="mb-6">
              {plan.features.map((feature, index) => ( // added index for key
                <li key={index} className="border-b py-2">{feature}</li> // changed key to index
              ))}
            </ul>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;