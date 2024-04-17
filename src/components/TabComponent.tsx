import { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleSearch = () => {
  };

  return (
    <div className="p-4 mb-20">
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <nav className="flex flex-row mb-4">
            <button
              onClick={() => setActiveTab('tab1')}
              className={`flex-1 py-2 text-center cursor-pointer ${activeTab === 'tab1' ? 'border-b-2 font-medium text-blue-600 border-blue-600' : 'text-gray-500'}`}
            >
              Location Search
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              className={`flex-1 py-2 text-center cursor-pointer ${activeTab === 'tab2' ? 'border-b-2 font-medium text-blue-600 border-blue-600' : 'text-gray-500'}`}
            >
              Start & Arrive
            </button>
          </nav>
          <div>
            {activeTab === 'tab1' ? (
              <div className="tab-content">
                <input
                  className="placeholder:text-sm shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Search for a location"
                />
                <button
                  onClick={handleSearch}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                >
                  Search
                </button>
              </div>
            ) : (
              <div className="tab-content">
                <input
                  className="placeholder:text-sm shadow appearance-none border mb-4 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="starting-point"
                  type="text"
                  placeholder="Starting Point"
                />
                <input
                  className="placeholder:text-sm shadow appearance-none border mb-4 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="arriving-point"
                  type="text"
                  placeholder="Arriving Point"
                />
                <button
                  onClick={handleSearch}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                >
                  Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
