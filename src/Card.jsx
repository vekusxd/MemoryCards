import PropTypes from "prop-types";

const Card = ({ imgSrc, title, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={
        "flex flex-col bg-gray-100 shadow-md rounded-lg hover:shadow-[0_0_15px_5px_rgba(220,38,38,0.7)] transition-all duration-200 z-50"
      }
    >
      <img
        src={imgSrc}
        alt={title}
        style={{ width: "200px", height: "200px" }}
        className="m-2 rounded-md"
      />
      <p className="m-5 text-2xl text-center ">{title}</p>
    </div>
  );
};

export default Card;

Card.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
