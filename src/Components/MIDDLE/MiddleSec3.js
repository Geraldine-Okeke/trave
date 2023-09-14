import des from './images/dest.png'
import Dest2 from './Dest2'
import cart from './images/cart.png'
export default function MiddleSec3(){
  return(
    <>
      <div className="flex flex-wrap -mx-2 mt-10 justify-between">
        <div className="w-full border border-solid border-gray-300 sm:w-3/5 px-2 bg-white ">
          <div className="flex flex-row justify-between">
           <div>
              <div className="flex flex-row">
                <h1>Best Destination</h1>
                <img className='ml-2 pt-2 w-6 h-6' src={des} alt='destination'/>
              </div>
              <span className='font-bold text-gray-600 text-sm'>100 destination found</span>
           </div>
           <div>
            <button className="font-normal text-sm border border-solid px-2">filter</button>
          </div> 
          </div>

          <div>
      {Dest2.map((destination, index) => (
        <div key={index} className="flex mb-10">
          
          <div className="w-3/4">
            <div className='flex flex-row font-normal text-sm'>
              <img src={destination.image} alt={destination.name} className="w-1/2 h-auto rounded-xl" />
              <div className='flex flex-col ml-3 '>
                <h2 className="text-xl font-bold">{destination.name}</h2>
                <div className='flex flex-row'>
                 <p className="text-gray-500">{destination.location}</p>
                 <span className="text-yellow-500 mr-1">★</span>
                <span className="text-gray-600">{destination.star}</span>
                </div>
                
              </div>
            </div>
            
          </div>
          <div className="w-1/4">
            <p className="mt-2 font-bold text-md">${destination.price}</p>
          </div>
        </div>
      ))}
    </div>

      
  </div>

        <div className="w-full sm:w-1/3 px-2  text-white">
          <div className=' bg-slate-900 w-full h-full pr-4 rounded-xl text-center flex flex-col items-center'>
            <img className='pl-2 pt-10' src={cart}alt="cartoon"/>
            <h1>Lets's explore <br/> The beauty</h1>
            <p className='text-sm pt-5 font-normal'>Get special offers and News</p>
            <button className='bg-green-500 text-white mt-5 px-3 rounded-xl'>Join now</button>
          </div>
         
        </div>
      </div>


    </>
  )
}