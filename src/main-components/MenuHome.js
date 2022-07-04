import MenuLink from "./MenuLink";
import { Link } from "react-router-dom";

const MenuHome = () => {
  return (
    <>
      <Link to="/">
        <MenuLink text="Home" />
      </Link>
    </>
  );
};

export default MenuHome;
