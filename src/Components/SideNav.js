import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="SideNav">
      {/* <NavLink to="Yegor M.">Author</NavLink> */}
      <NavLink to="">Heavy Metal</NavLink>
      <NavLink to="">Metalcore</NavLink>
      <NavLink to="">Prog</NavLink>
      <NavLink to="">Rock</NavLink>
      <NavLink to="">Electronic</NavLink>
    </div>
  );
};

export default SideNav;
