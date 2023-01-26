import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";

function NavigationItem(props) {
  const baseClass = useMemo(() => {
    return "p-3 inline-flex border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500  transition duration-300 cursor-pointer";
  }, []);
  const linkActiveClass = useMemo(() => {
    return `bg-blue-400 font-bold text-white ${baseClass}`;
  }, []);
  const nestedClass = useMemo(() => (props.isnested ? "pl-2" : ""), []);
  const setNavLinkActive = useCallback(
    (active) => (active ? linkActiveClass : baseClass),
    [linkActiveClass, baseClass]
  );

  return (
    <NavLink
      to={props.target}
      className={({ isActive }) => setNavLinkActive(isActive)}
    >
      <span className={`flex ${nestedClass}`}>
        {props.icon}
        {props.title}
      </span>
    </NavLink>
  );
}

NavigationItem.propTypes = {
  target: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
  isnested: PropTypes.bool,
};

export default NavigationItem;
