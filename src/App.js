import React from 'react';
import mockup from './assets/mockup.png'
import { LockIcon, ShieldIcon, LaptopMinimal } from 'lucide-react';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';


const App = () => {
  return (
    <><div className="font-Manrope bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>

      </div>
      <div className="container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Trustworthy Security <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-700">NoCheat</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Unlock Your Potential: Honest Achievement with Integrity.
          </p>

          <a href="#download" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium  text-white bg-gray-800 rounded-xl group">
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-purple-800 to-indigo-700 rounded-full group-hover:w-56 group-hover:h-56"></span>

            <span class="relative">Download Now</span>
          </a>

        </div>
        <div className="relative">
          <img
            src={mockup}
            alt="Hero Image"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg scale-110 transform hover:scale-125 transition-all duration-500 hover:rotate-12"
          />

        </div>
      </div>


    </div>
      <div className="bg-black font-Manrope">

        <DownloadSection />
        <FeatureCards />
      </div>
    </>

  );
};


const DownloadSection = () => {
  return (
    <div id="download" className='pt-32'>
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent text-white">
            Download Now
          </span>
        </h2>
        <p className="text-lg text-gray-400">
          Discover the powerful features that make our solution stand out.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 p-24">
        <a
          href="#"
          className="bg-black text-white py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-900"
        >
          <FaWindows size={24} className="text-purple-500 mr-2 transition-colors duration-300 hover:text-white" />
          <span>Windows</span>
        </a>
        <a
          href="#"
          className="bg-black text-white py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-900"
        >
          <FaApple size={24} className="text-indigo-500 mr-2 transition-colors duration-300 hover:text-white" />
          <span>Mac</span>
        </a>
        <a
          href="#"
          className="bg-black text-white py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-900"
        >
          <FaLinux size={24} className="text-green-500 mr-2 transition-colors duration-300 hover:text-white" />
          <span>Linux</span>
        </a>
      </div>
    </div>
  );
};

const FeatureCards = () => {
  return (
    <div className="mt-32">

      <div className="text-center ">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent text-white">
            Key Features
          </span>
        </h2>
        <p className="text-lg text-gray-400">
          Discover the powerful features that make our solution stand out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-24">

        <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-start border border-gray-600">
          <div className="bg-indigo-600 p-3 rounded-full mb-4">
            <LockIcon size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2"> No Tab Switch</h3>
          <p className="text-gray-300">
            Stay focused on your tasks without the temptation to switch tabs, ensuring uninterrupted productivity and concentration.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-start border border-gray-600">
          <div className="bg-green-600 p-3 rounded-full mb-4">
            <LaptopMinimal size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No Minimize or Resize</h3>
          <p className="text-gray-300">
            Prevent distractions and maintain full-screen focus by eliminating the ability to minimize or resize the browser window.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-start border border-gray-600">
          <div className="bg-purple-600 p-3 rounded-full mb-4">
            <ShieldIcon size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Screen Protection or No Sharing</h3>
          <p className="text-gray-300">
            Prevent cheating during assessments by enabling screen protection and prohibiting screen sharing software like AnyDesk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;