import TabComponent from './TabComponent';

const LayoutComponent = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-x-4 p-4 mt-20 justify-center">
      <div className="w-full md:w-1/2">
        <TabComponent />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="text-3xl font-bold mb-4">JUST RELAX, WE TAKE CARE OUR YOUR TRIP FOR YOU !</div>
        <p className='text-gray-400 text-sm'>
        Traveling.io, your ultimate travel companion for seamless trip planning. 
        Our intuitive platform simplifies the entire process, offering personalized recommendations 
        tailored to your preferences and budget. 
        Whether you're craving a cultural adventure in Europe, a relaxing beach getaway in the Caribbean,
        or an adrenaline-fueled escapade in Asia, Traveling.io has you covered. 
        Simply input your desired destinations and dates, 
        and let our advanced algorithms curate the perfect itinerary just for you. 
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
