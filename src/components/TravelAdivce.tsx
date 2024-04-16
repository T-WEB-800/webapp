import React from 'react';

const TravelAdvice = () => {
  return (
    <section className="bg-white px-12 py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://i.imgur.com/5cx6k8z.png" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-5">Pack Light & Plan Ahead</h2>
            <p className="text-sm leading-relaxed mt-2">When packing for your trip, try to bring only the essentials to avoid carrying heavy luggage. Consider versatile clothing items and minimize the number of shoes you bring. This will not only make your travels more convenient but also give you more flexibility during your trip.
</p>
            <a className="text-blue-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://files.oaiusercontent.com/file-OUYdCMW4j8YOCmHn5uxvJqxP?se=2024-04-16T10%3A12%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da7f96778-700e-4218-9968-0cb7c35ac5ce.webp&sig=hAezY00%2BJVWIzzuaC5Okyekaqs7aPou8uc7Ikm5oot0%3D" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-5">Stay Flexible</h2>
            <p className="text-sm leading-relaxed mt-2">While it’s important to have a plan, it’s equally important to stay flexible during your travels. Unexpected delays, changes in weather, or new opportunities may arise, so be prepared to adapt your plans accordingly. Embrace these moments as part of the adventure and enjoy the journey.</p>
            <a className="text-blue-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://i.imgur.com/eoudqKi.png" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-5">Stay Hydrated & Enjoy</h2>
            <p className="text-sm leading-relaxed mt-2">Staying hydrated is crucial, especially when traveling. Carry a reusable water bottle and drink plenty of fluids throughout your journey, particularly in hot or humid climates. Dehydration can lead to fatigue, headaches, and other health issues, so prioritize staying hydrated to feel your best during your travels.</p>
            <a className="text-blue-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAdvice;
