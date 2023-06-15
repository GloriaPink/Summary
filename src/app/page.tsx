import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="result-summary overflow-hidden lg:rounded-3xl lg:grid grid-cols-2 h-auto bg-white max-w-3xl shadow-lg">
        <div className="results grid grid-rows bg-[#4936F5] text-center font-semibold lg:rounded-3xl rounded-b-3xl lg:p-20 p-10 lg:gap-8 gap-4 justify-items-center">
          <h1 className="section-title text-gray-300 lg:text-2xl text-lg">Your Result</h1>
          <p className="result-score rounded-full bg-[#2b19cc] w-48 aspect-square place-content-center grid text-white"><span className="text-7xl">76</span>of 100</p>
          <div className="grid grid-rows gap-4">
            <p className="result-rank lg:text-3xl text-xl text-white">Great</p>
            <p className="text-gray-300 text-center text-sm lg:text-base">You scored higher than 65% of the people who have taken these tests</p>
          </div>
        </div>
        <div className="summary font-semibold lg:px-10 lg:py-20 px-5 py-5 grid grid-rows">
          <h2 className="section-title text-black lg:text-2xl text-lg lg:mb-10 mb-5">Summary</h2>

          <div className="flex flex-row rounded-lg items-center justify-between px-4 bg-pink-50 mb-4 py-4">
            <div className="summary-item flex flex-row text-red-500 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" /></svg>
              <h3 className="summary-item-title text-sm lg:text-base">Reaction</h3>
            </div>
            <p className="summary-score flex flex-row text-sm lg:text-base"><span>80</span>/100</p>
          </div>
          <div className="flex flex-row rounded-lg items-center justify-between px-4 bg-yellow-50 mb-4 py-4">
            <div className="summary-item flex flex-row text-yellow-500 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858" /><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858" /><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0" /></svg>
              <p className="summary-item-title text-sm lg:text-base">Memory</p>
            </div>
            <p className="summary-score flex flex-row text-sm lg:text-base"><span>92</span>/100</p>
          </div>
          <div className="flex flex-row rounded-lg items-center justify-between px-4 bg-green-50 mb-4 py-4">
            <div className="summary-item flex flex-row text-green-500 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z" /></svg>
              <p className="summary-item-title text-sm lg:text-base">Verbal</p>
            </div>
            <p className="summary-score flex flex-row text-sm lg:text-base"><span>61</span>/100</p>
          </div>
          <div className="flex flex-row rounded-lg items-center justify-between px-4 bg-blue-50 mb-4 py-4">
            <div className="summary-item flex flex-row text-blue-500 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" /><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z" /></svg>
              <p className="summary-item-title text-sm lg:text-base">Visual</p>
            </div>
            <p className="summary-score flex flex-row text-sm lg:text-base"><span>72</span>/100</p>
          </div>

          <button className="bg-[#4936F5] text-sm lg:text-base rounded-full lg:p-4 p-3 w-full mb-3 text-white cursor-pointer hover:bg-blue-700 lg:mt-10 mt-5">Continue</button>
        </div>
      </div>
    </main>
  )
}
