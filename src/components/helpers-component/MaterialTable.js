import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

const MaterialTable = () => {
  const [name, setName] = useState("");
  const [list, SetList] = useState([]);

  const handelSubmit = (event) => {
    event.preventDefault();
    const data = { name };
    if (name) {
      SetList((ls) => [...ls, data]);
      setName("");
    }
  };
  const handelDelete = (e) => {
    let x = e.target.getAttribute("removeName");
    SetList(list.filter((item) => item.name !== x));
  };
  return (
    <>
      <Form className="material-input" onSubmit={handelSubmit}>
        <Form.Control
          name={name}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form>
      <div className="material-table">
        {list.map((ls) => (
          <>
            <p>
              {" "}
              {ls.name}{" "}
              <span
                className="margin-left5"
                removeName={ls.name}
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
