import React, { useState } from 'react';

const MapNavBar = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const cities = [
        { name: "New York", description: "Known for its cultural diversity and the Statue of Liberty." },
        { name: "Los Angeles", description: "Famous for Hollywood and beautiful beaches." },
        { name: "Chicago", description: "Known for its bold architecture and deep-dish pizza." },
        { name: "Houston", description: "Famous for space exploration and rich Texan culture." },
        { name: "Phoenix", description: "Known for its desert climate and vibrant art scenes." },
    ];

    return (
        <div className="flex flex-col h-screen bg-white text-black w-64 shadow-lg">
            <div className="flex border-b">
                <button
                    className={`flex-1 p-4 text-center ${activeTab === 'tab1' ? 'bg-gray-200' : 'bg-white'}`}
                    onClick={() => setActiveTab('tab1')}
                >
                    Tab 1
                </button>
                <button
                    className={`flex-1 p-4 text-center ${activeTab === 'tab2' ? 'bg-gray-200' : 'bg-white'}`}
                    onClick={() => setActiveTab('tab2')}
                >
                    Tab 2
                </button>
            </div>
            <div className={`flex-1 p-4 overflow-auto ${activeTab !== 'tab1' ? 'hidden' : ''}`}>
                <div>
                    <div className="flex justify-between mb-4">
                        <button className="px-4 py-2 border rounded text-black bg-gray-300">Button 1</button>
                        <button className="px-4 py-2 border rounded text-black bg-gray-300">Button 2</button>
                    </div>
                    <div className="space-y-4">
                        {cities.map((city, index) => (
                            <div key={index} className="p-4 bg-gray-100 border rounded">
                                <h2 className="font-bold">{city.name}</h2>
                                <p>{city.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`flex-1 p-4 overflow-auto ${activeTab !== 'tab2' ? 'hidden' : ''}`}>
                <h1 className="font-bold text-lg">Page 2</h1>
                <p>Content of Page 2.</p>
            </div>
        </div>
    );
};

export default MapNavBar;
