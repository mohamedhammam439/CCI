import React, { useContext, useState } from "react";
import Select from "react-select";
import { PresentStore } from "../../Contexts/PresentStore";




const SingleSelectNumber = () => {
  const {selectnumber,ddhandler,NumberCode}= useContext(PresentStore)
  console.log("selectnumber",selectnumber);
  return (
   
      <Select
        defaultValue={[NumberCode[0]]}
        name="colors"
        options={NumberCode}
        className="basic-multi-select width-single-select"
        classNamePrefix="select"
        onChange={ddhandler}
      />
  );
};

export default SingleSelectNumber;
