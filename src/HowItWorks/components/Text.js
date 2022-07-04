const Para = ({ text, moreCss }) => {
  const css = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    lineHeight: "40px",
    letterSpacing: "0.03em",
    color: "#FFFFFF",
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: "1%",
  };

  const finalCss = {
    ...css,
    ...moreCss,
  };

  return (
    <>
      <p style={finalCss}>{text}</p>
    </>
  );
};

export default Para;
