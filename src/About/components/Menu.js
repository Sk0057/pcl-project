import MenuHowItWorks from "../../main-components/MenuHowItWorks";
import MenuHome from "../../main-components/MenuHome";
import MenuGetStarted from "../../main-components/MenuGetStarted";

const Menu = () => {
  const css = {
    display: "flex",
    position: "absolute",
    width: "335px",
    flexDirection: "row",
    marginLeft: "70.8%",
    marginTop: "1.9%",
    justifyContent: "space-evenly",
    color: "white",
  };

  return (
    <div style={css}>
      <MenuHowItWorks />
      <MenuHome />
      <MenuGetStarted />
    </div>
  );
};

export default Menu;
