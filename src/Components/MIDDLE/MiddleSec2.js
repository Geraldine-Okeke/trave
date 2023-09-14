import Dest from './Dest'; 

export default function MiddleSec2(){
  return(
    <>
      <div className='mt-20'>
      
      <div className="flex flex-wrap -mx-2">
        {Dest.map((destination, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4 relative">
            <img
              src={destination.image}
              alt={`Destination ${index + 1}`}
              className="w-full h-64 rounded-xl "
            />
            <span className='absolute bottom-6 text-white p-2'>{destination.name}</span>
            <div className='flex flex-row absolute bottom-0'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 "
              >
                <circle cx="12" cy="12" r="6" />
                <path d="M12 2v4m0 16v-4m-6-6h4m8 0h-4" />
              </svg>
              <span className='text-white text-sm font-normal'>{destination.location}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 ml-4"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className='text-white text-sm font-normal ml-3' >{destination.star}</span>


            </div>
          
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}