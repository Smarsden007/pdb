import React from "react";

export const Background = (props) => {
  return (
    <div>
      <div className="bg-[#f8f5f2]">{props.children}</div>
    </div>
  );
};
