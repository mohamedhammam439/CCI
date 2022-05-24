import React, { useContext } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { PresentStore } from "../../Contexts/PresentStore";

const MaterialTable = () => {
  const [msn, setMsn] = useState("");
  const {savemsn,addSavedata,removeSavedata} = useContext(PresentStore)

  const handelSubmit = (event) => {
    event.preventDefault();
    addSavedata(msn);
    setMsn('')
  };
  const handelDelete = (e) => {
    removeSavedata(e)
  };
  return (
    <>
      <Form className="material-input" onSubmit={handelSubmit}>
        <Form.Control
          name={msn}
          value={msn}
          onChange={(event) => setMsn(event.target.value)}
        />
      </Form>
      <div className="material-table">
        {savemsn.map((ls) => (
          <>
            <p>
              {" "}
              {ls.msn}{" "}
              <span
                className="margin-left5"
                removeName={ls.msn}
                onClick={handelDelete}
              >
                x
              </span>{" "}
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default MaterialTable;
