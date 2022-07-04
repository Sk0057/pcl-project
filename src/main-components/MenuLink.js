const MenuLink = ({ text, add }) => {
  const css = {
    color: "white",
    backgroundColor: "Transparent",
    backgroundRepeat: "no-repeat",
    border: "none",
    overflow: "hidden",
    outline: "none",
    fontSize: "1em",
    fontFamily: "Nunito Sans",
  };
  return (
    <>
      <button style={css}>{text}</button>
    </>
  );
};

export default MenuLink;
