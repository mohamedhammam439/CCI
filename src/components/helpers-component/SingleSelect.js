import React, { useContext, useState } from "react";
import Select from "react-select";
import { PresentStore } from "../../Contexts/PresentStore";




const SingleSelect1 = () => {
  const {select1,ddhandler,colourOptions}= useContext(PresentStore)
  console.log("select1",select1);
  return (
   
      <Select
        defaultValue={[colourOptions[0]]}
        name="colors"
        options={colourOptions}
        className="basic-multi-select width-single-select"
        classNamePrefix="select"
        onChange={ddhandler}
      />
  );
};

export default SingleSelect1;
