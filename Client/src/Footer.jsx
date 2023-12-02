import React from "react";

const Footer = ({ length }) => {
  return (
    <div>
      Total list of {length < 2 ? "task is" : "tasks are"} {length}
    </div>
  );
};

export default Footer;
