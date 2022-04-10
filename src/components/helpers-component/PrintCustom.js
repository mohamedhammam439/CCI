import { Button } from 'bootstrap';
import React, { useRef } from 'react';
import ReactToPrint from "react-to-print";
import PrintForm from "./PrintForm";

const PrintCustom = () => {
    const componentRef = useRef();

  return (
    <div>
      {" "}
      
      <ReactToPrint
        trigger={() =>  <Button className="btn">
        طباعة
      </Button>}
        content={() => componentRef}
      />
      <PrintForm ref={componentRef} />
    </div>
  );
};

export default PrintCustom;
