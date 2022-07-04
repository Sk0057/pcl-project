const Heading = ({ text }) => {
  const titleCss = {
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "48px",
    lineHeight: "64px",
    /* identical to box height */
    letterSpacing: "0.04em",
    color: "white",
    marginLeft: "38%",
    paddingTop: "5%",
  };
  return (
    <>
      <h1 style={titleCss}>{text}</h1>
    </>
  );
};

export default Heading;
