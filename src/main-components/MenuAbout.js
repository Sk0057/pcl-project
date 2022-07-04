import MenuLink from "./MenuLink";
import { Link } from "react-router-dom";

const MenuAbout = () => {
  return (
    <>
      <Link to="/About">
        <MenuLink text="About" />
      </Link>
    </>
  );
};

export default MenuAbout;
