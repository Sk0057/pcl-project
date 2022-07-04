const Bitcoin = () => {
  const css = {
    fontSize: "6.5em",
    color: "#fff",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "900",
    lineHeight: "133px",
    letterSpacing: "0.07em",
    margin: "5px",
    // width: "38%",
    display: "inline-block",
  };
  return (
    <>
      <h1 style={css}>BITCOIN</h1>
    </>
  );
};

const Text = () => {
  const css = {
    fontSize: "2.6em",
    color: "#fff",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "50px",
    /* or 125% */
    letterSpacing: "0.05em",
    margin: "5px",
  };

  return (
    <>
      <h2 style={css}>SENTIMENT INDICATOR</h2>
    </>
  );
};

const Heading = () => {
  const css = {
    marginLeft: "5%",
    paddingTop: "7%",
    width: "38%",
  };

  return (
    <div style={css}>
      <Bitcoin />
      <Text />
    </div>
  );
};

export default Heading;
