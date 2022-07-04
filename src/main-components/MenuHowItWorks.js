import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";

const MenuHowItWorks = () => {
  return (
    <>
      <Link to="/HowItWorks">
        <MenuLink text="How it works" />
      </Link>
    </>
  );
};

export default MenuHowItWorks;
