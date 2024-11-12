import Image from 'next/image'

export default function Home() {
  return (
      <div className="w-screen h-screen relative">
          <Image
              src="/images/background.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
          />
          <div className="flex items-center justify-center flex-col h-full absolute inset-0 bg-black bg-opacity-45">
              <div className="">
                  <h1 className="text-white text-7xl">
                      Here your journey starts!
                  </h1>
              </div>
              <div>
                  <h2 className="text-white text-2xl m-10">Search your destination</h2>
              </div>
              <div className="flex">
                  <div className="flex bg-neutral-50 rounded-lg w-fit ">
                      <div className="w-60 h-16">
                          <div className="flex items-center h-full border-r-2 border-gray-200">
                              <span className="material-icons text-6xl text-gray-600 bg-gray-100 ml-3">north_east</span>
                              <input
                                  type="text"
                                  id="location"
                                  name="location"
                                  placeholder="From where?"
                                  className="w-full p-4 bg-neutral-50 focus:outline-none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  spellCheck="false"
                              />
                          </div>
                      </div>
                      <div className="w-60 h-16">
                          <div className="flex items-center h-full border-r-2 border-gray-200">
                              <span className="material-icons text-6xl text-gray-600 bg-gray-100 ml-3">south_east</span>
                              <input
                                  type="text"
                                  id="location"
                                  name="location"
                                  placeholder="Where to?"
                                  className="w-full p-4 bg-neutral-50 focus:outline-none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  spellCheck="false"
                              />
                          </div>
                      </div>
                      <div className="w-60 h-16">
                          <div className="flex items-center h-full">
                              <span className="material-icons text-6xl text-gray-600 bg-gray-100 ml-3">calendar_month</span>
                              <input
                                  type="text"
                                  id="location"
                                  name="location"
                                  placeholder="Depart - Return"
                                  className="w-full p-4 bg-neutral-50 focus:outline-none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  spellCheck="false"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="w-64 rounded-lg bg-lime-400 ml-3 flex justify-center items-center transition duration-150 hover:bg-lime-500">
                      <button className="text-xl text-gray-900">Search</button>
                  </div>
              </div>
          </div>
      </div>
  );
}
