export default function MiddleTop(props) {
  let notify = 6;

  return (
    <>
      <div className="lg:flex lg:flex-row md:flex-col justify-between">
        <div className="mb-4 md:mb-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            hello {props.name} 👋
          </h1>
          <p className="text-gray-600 font-normal text-sm md:text-base">
            Welcome back and explore the world
          </p>
        </div>
        <div className="md:ml-2 lg:ml-4">
          <div className="relative">
            <input
              type="search"
              className="w-full text-sm md:text-base pl-10 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Search destination"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-2 lg:mt-0 md:ml-0 lg:ml-2">
          <div className="relative w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full md:w-8 md:h-8 lg:w-10 lg:h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2c3.865 0 7 3.135 7 7v4l4 4H1l4-4v-4c0-3.865 3.135-7 7-7z"
              />
            </svg>
            <span className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 font-normal font rounded-full bg-red-500 m-auto flex text-white items-center justify-center text-center">
              {notify}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
