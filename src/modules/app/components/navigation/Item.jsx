import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Item(props) {
  return (
    <NavLink
      to={props.target}
      className="
        inline-flex justify-around
        px-6
        py-2
        border-b border-gray-200
        w-full
        hover:bg-gray-100 hover:text-gray-500
        focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
        transition
        duration-500
        cursor-pointer
      "
    >
      hello from link
    </NavLink>
  );
}

Item.propTypes = {
  target: PropTypes.string,
  
};

export default NavigationItem;
