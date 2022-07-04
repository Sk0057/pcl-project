import MenuHowItWorks from "../../main-components/MenuHowItWorks";
import MenuGetStarted from "../../main-components/MenuGetStarted";
import MenuAbout from "../../main-components/MenuAbout";

const Menu = () => {
  const css = {
    display: "flex",
    position: "absolute",
    width: "340px",
    flexDirection: "row",
    marginLeft: "70%",
    marginTop: "-30%",
    justifyContent: "space-evenly",
  };
  return (
    <div style={css}>
      <MenuHowItWorks />
      <MenuAbout />
      <MenuGetStarted />
    </div>
  );
};

export default Menu;
