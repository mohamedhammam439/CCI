import React, { useContext } from "react";
import { PresentStore } from "../../Contexts/PresentStore";

const MaterialTable = () => {
  const { savemsn } = useContext(PresentStore);
  return (
    <>
      <div className="material-table">
        {savemsn.map((ls) => (
          <>
            <p> {ls.msn} </p>
          </>
        ))}
      </div>
    </>
  );
};

export default MaterialTable;
