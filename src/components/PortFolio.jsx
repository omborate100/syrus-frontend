import React from 'react';
import { useGlobalState } from '../store'; // Make sure this import path is correct for your project structure

const PortFolio = () => {
  const [connectedAccount] = useGlobalState('connectedAccount');

  // Placeholder data - replace with actual portfolio data
  const portfolioData = [
    { name: 'Balance', value: '100' },
    { name: 'Interest on Asset', value: '5%' },
    { name: 'Interest on Borrowing Asset', value: '7%' },
    { name: 'Maximum token can Borrow', value: '30' },
    { name: 'Maximum token can Borrow', value: '30' },
    { name: 'Maximum token can Borrow', value: '30' },


  ];

  return (
    
    <div className="dark:bg-gray-900 bg-cover bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')] min-h-screen flex justify-start items-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 md:p-10 w-1/2 ml-10 ">
        <h2 className="text-2xl font-bold text-center mb-5 dark:text-gray-200">Portfolio</h2>
        <div className="text-center dark:text-gray-400 mb-4">
          <p className="text-lg">Connected Account:</p>
          <p className="text-md font-semibold">{connectedAccount ? connectedAccount : 'Not connected'}</p>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {portfolioData.map((asset, index) => (
            <div key={index} className="py-4 flex justify-between items-center dark:text-gray-400">
              <span className="text-lg font-medium">{asset.name}</span>
              <span className="text-lg">{asset.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
