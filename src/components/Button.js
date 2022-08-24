import * as React from "react";

import ButtonNice from "react-button-nice";
import { btnDefaultStyle } from "../App";

const marginStyle = {
  display: "block",
  marginBottom: 32,
};


const Button = ({ id, name, onClick }) => {
  return (
    <ButtonNice alpha={0.3} style={marginStyle}>
      <button
        onClick={() => onClick(name)}
        style={{
          ...btnDefaultStyle,
          backgroundColor: "#843CC7",
        }}
      >
        {name}
      </button>
    </ButtonNice>
  );
};

export default Button;
