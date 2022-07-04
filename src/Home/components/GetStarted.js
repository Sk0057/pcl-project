import { Link } from "react-router-dom";

const GetStarted = () => {
  const css = {
    background: "#0D0E12",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "50px",
    color: "white",
    height: "60px",
    width: "200px",
    fontSize: "1.4em",
    fontFamily: "Nunito Sans",
  };

  const divStyle = {
    marginTop: "10%",
    marginLeft: "5%",
  };

  return (
    <div style={divStyle}>
      <Link to="/main">
        <button style={css}>Get Started</button>
      </Link>
    </div>
  );
};

export default GetStarted;
