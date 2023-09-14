import face from './images/face.png';

export default function RightTop(props) {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-5 items-center pt-5">
        <div className="border rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 mb-2 lg:mb-0 lg:mr-4">
          <img className="w-6 h-6" src={face} alt="face" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <h1 className="font-bold text-center lg:text-left">{props.name}</h1>
          <span className="text-center lg:text-left lg:ml-2">
            Traveler Enthusiast
          </span>
        </div>
        <div className="mt-2 lg:mt-0 lg:ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.553 5.553a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L8 10.586l5.146-5.147a1 1 0 0 1 1.407 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
