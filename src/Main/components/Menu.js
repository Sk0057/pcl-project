import MenuHowItWorks from "../../main-components/MenuHowItWorks";
import MenuHome from "../../main-components/MenuHome";
import MenuAbout from "../../main-components/MenuAbout";

const Menu = () => {
  const css = {
    display: "flex",
    position: "absolute",
    width: "300px",
    flexDirection: "row",
    marginLeft: "70.75%",
    marginTop: "1.9%",
    justifyContent: "space-evenly",
    color: "white",
  };
  return (
    <div style={css}>
      <MenuHowItWorks />
      <MenuAbout />
      <MenuHome />
    </div>
  );
};

export default Menu;
