import useWindowDimensions from "../hooks/windowDimensions";

function Header({ includeTitle }) { // Destructure includeTitle from props

  const { height, width } = useWindowDimensions();

  return (
    <div>
      <div className="grid absolute w-[100%] justify-center overflow-x-hidden">
        <img 
          className="
          min-w-[900px] 
          max-w-[900px]
          h-[750px]
          object-cover
          object-top
          opacity-70
          "
          src={require("./assets/background.png")} 
          alt="Background" // Added alt attribute for better accessibility
        />
      </div>
      {includeTitle && (  // Use curly braces and && for conditional rendering
        <header className='relative top-[200px] h-[400px] max-sm:h-[500px] items-center justify-center'>
          <h1 className='landingPageTitle text-6xl max-md:text-5xl max-sm:text-3xl font-bold text-center'>
            <span className='block'>A PLACE FOR </span> 
            <span className='block'><span className="text-[blue-700]">Y</span>OUNG CRE<span className="text-[blue-700]">AT</span>IV<span className="text-[blue-700]">E</span>S</span>
          </h1>
        </header>
      )}
    </div>
  );
}

export default Header;