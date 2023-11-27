import React from "react";

const BackDrop = ({ closeHandelr }: any) => {
  return <div onClick={closeHandelr} className="back-drop"></div>;
};

export default BackDrop;
