
import React from "react";
import Select from "react-select";

export const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];


export const NumberCode = [
  { value: "02", label: "02", isFixed: true },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05"},
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "013", label: "013" },
  { value: "045", label: "045" },
];

const SingleSelect = () => {
  return (
    <Select
      defaultValue={[NumberCode[0]]}
      name="colors"
      options={NumberCode}
      className="basic-multi-select width-single-select"
      classNamePrefix="select"
    />
  );
};

export default SingleSelect;

