import React from "react";

const Header = ({ title }) => {
  return <div>{title}</div>;
};

Header.defaultProps = {
  title: "TODO List  ",
};

export default Header;
