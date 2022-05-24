import React, { useContext, useState } from "react";
import Select from "react-select";
import { PresentStore } from "../../Contexts/PresentStore";




const SingleSelect2 = () => {
  const {select2,ddhandler2,colourOptions}= useContext(PresentStore)
  return (
   
      <Select
        defaultValue={[colourOptions[0]]}
        name="colors"
        options={colourOptions}
        className="basic-multi-select width-single-select"
        classNamePrefix="select"
        onChange={ddhandler2}
      />
  );
};

export default SingleSelect2;
