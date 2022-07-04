import MenuAbout from "../../main-components/MenuAbout";
import MenuHome from "../../main-components/MenuHome";
import MenuGetStarted from "../../main-components/MenuGetStarted";

const Menu = () => {
  const css = {
    display: "flex",
    position: "absolute",
    width: "335px",
    flexDirection: "row",
    marginLeft: "69%",
    marginTop: "2.3%",
    justifyContent: "space-evenly",
    color: "white",
  };

  return (
    <div style={css}>
      <MenuHome />
      <MenuAbout />
      <MenuGetStarted />
    </div>
  );
};

export default Menu;
