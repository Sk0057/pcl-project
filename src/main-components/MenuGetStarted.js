import MenuLink from "./MenuLink";
import { Link } from "react-router-dom";

const MenuGetStarted = () => {
  return (
    <>
      <Link to="/Main">
        <MenuLink text="Get Started" />
      </Link>
    </>
  );
};

export default MenuGetStarted;
