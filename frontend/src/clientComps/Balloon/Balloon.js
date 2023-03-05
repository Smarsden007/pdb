import React from "react";
function Balloon(props) {
  const { color, name, isSelected, onSelect } = props;

  return (
    <div
      className={`flex items-center p-2 cursor-pointer ${
        isSelected ? "bg-gray-700" : ""
      }`}
      onClick={() => onSelect(color)}
    >
      <img src={color} alt={name} className="w-8 h-8 mr-2" />
      <span className="text-lg">{name}</span>
    </div>
  );
}

export default Balloon;
