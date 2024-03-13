import PropTypes from "prop-types";

const StartExperience = ({ isExperienceStarted, setIsExperienceStarted }) => {
  const handleClick = () => {
    setIsExperienceStarted(true);
  };
  return (
    <div
      className={`grid justify-center items-center absolute bg-blackSuit z-50 inset-0 ${isExperienceStarted ? "animate-startExperience" : ""}`}
    >
      <div className="place-center">
        <h1 className="text-6xl">SUITON</h1>
        <button
          className="relative text-2xl after:absolute after:w-[90%] after:bottom-1 after:left-0 after:bg-gold after:h-[2px] after:rounded-full"
          onClick={handleClick}
        >
          Start Experience
        </button>
      </div>
    </div>
  );
};

StartExperience.propTypes = {
  isExperienceStarted: PropTypes.bool.isRequired,
  setIsExperienceStarted: PropTypes.func.isRequired,
};

export default StartExperience;
