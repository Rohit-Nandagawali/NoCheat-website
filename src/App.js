import React from 'react';
import mockup from './assets/mockup.png'
import { LockIcon, ShieldIcon, LaptopMinimal } from 'lucide-react';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';


const App = () => {
  return (
    <><div className="font-Manrope bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div class="relative h-full w-full bg-black">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
          </div>
        </div>

      </div>
      <div className="container mx-24 z-10 flex flex-col lg:flex-row items-center justify-between ">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Trustworthy Security <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-700">NoCheat</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Secure Your Online Assessments - Download NoCheat Browser Today!
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
          No More Cheating Worries - Download NoCheat Browser Today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 p-10 md:p-24">
        <a
          href="https://github.com/Rohit-Nandagawali/NoCheat-Browser/releases/download/v1.0.0-beta/NoCheat.Setup.0.1.0.exe"
          className="bg-black text-white py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-900"
          download
        >
          <FaWindows size={24} className="text-purple-500 mr-2 transition-colors duration-300 hover:text-white" />
          <span>Windows</span>
        </a>
        <p

          className="bg-black text-white py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-900 cursor-not-allowed"

        >
          <FaApple size={24} className="text-indigo-500 mr-2 transition-colors duration-300 hover:text-white" />
          {/* <span>Mac</span> */}
          <span className='text-gray-400'>Coming soon</span>
        </p>
        <p

          className="bg-black text-white py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-gray-900 cursor-not-allowed"

        >
          <FaLinux size={24} className="text-green-500 mr-2 transition-colors duration-300 hover:text-white" />
          {/* <span>Linux</span> */}
          <span className='text-gray-400'>Coming soon</span>
        </p>
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

        {/* card 1 */}

        <div className="bg-gradient-to-br to-gray-950/95 from-gray-950 rounded-2xl p-8 flex flex-col items-start border border-gray-900 relative group hover:-translate-y-2 transition-all duration-300">
          <div className="bg-indigo-600 p-3 rounded-full mb-4 z-10 shadow-lg shadow-indigo-700/25">
            <LockIcon size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 z-10">No Tab Switch</h3>
          <p className="text-gray-300 z-10">
            Stay focused on your tasks without the temptation to switch tabs, ensuring uninterrupted productivity and concentration.
          </p>
          <div className="absolute rounded-2xl z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          </div>
        </div>

        <div className="bg-gradient-to-br to-gray-950/95 from-gray-950 rounded-2xl p-8 flex flex-col items-start border border-gray-900 relative group  hover:-translate-y-2 transition-all duration-300">
          <div className="bg-green-600 p-3 rounded-full mb-4 z-10 shadow-lg shadow-green-700/25">
            <LaptopMinimal size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No Minimize or Resize</h3>
          <p className="text-gray-300">
            Prevent distractions and maintain full-screen focus by eliminating the ability to minimize or resize the browser window.
          </p>
          <div className="absolute rounded-2xl z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          </div>
        </div>

        <div className="bg-gradient-to-br to-gray-950/95 from-gray-950 rounded-2xl p-8 flex flex-col items-start border border-gray-900 relative group  hover:-translate-y-2 transition-all duration-300">
          <div className="bg-purple-600 p-3 rounded-full mb-4 z-10 shadow-lg shadow-purple-700/25">
            <ShieldIcon size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Screen Protection or No Sharing</h3>
          <p className="text-gray-300">
            Prevent cheating during assessments by enabling screen protection and prohibiting screen sharing software like AnyDesk.
          </p>
          <div className="absolute rounded-2xl z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          </div>
        </div>


      </div>

    </div>
  );
};

export default App;
