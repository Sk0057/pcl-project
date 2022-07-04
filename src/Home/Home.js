import Heading from "./components/Heading";
import GetStarted from "./components/GetStarted";
import Menu from "./components/Menu";
import bg from "./components/img.jpg";

document.body.style = "background: rgba(21, 18, 25, 1)";

const css = {
  backgroundImage: `linear-gradient(89.94deg, #111111 0.06%, rgba(18, 18, 18, 0) 99.96%), url(${bg})`,
  // background: "rgba(21,18,25,1)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "98vw",
  height: "98vh",
};

const Home = () => {
  // console.log("now we are at home");
  return (
    <div style={css}>
      <Heading />
      <GetStarted />
      <Menu />
    </div>
  );
};

export default Home;
