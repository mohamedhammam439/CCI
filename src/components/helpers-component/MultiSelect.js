import React from "react";
import { useState, useRef } from "react";
import { Form, Table } from "react-bootstrap";

const MultiSelect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, SetList] = useState([]);

  const FocusFun = useRef(null);

  const handelFocus = () => {
    FocusFun.current.focus();
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    const data = { name, email };
    if (name && email) {
      SetList((ls) => [...ls, data]);
      setName("");
      setEmail("");
    }
  };

  const handelDelete = (e) => {
    let x = e.target.getAttribute("removeName");
    SetList(list.filter((item) => item.name !== x));
  };

  return (
    <>
      <Form className="material-input" onSubmit={handelSubmit}>
        <Table bordered>
          <thead>
            <tr>
              <th>النشاط الصناعي للمنشأة - المنتجات</th>
              <th>الطاقة الانتاجية السنوية</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Control
                  name="name"
                  autoFocus
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  ref={FocusFun}
                />
              </td>
              <td>
                <Form.Control
                  name="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </td>
            </tr>
            {list.map((ls) => (
              <tr className="material-table">
                <td>
                  <p>
                    {" "}
                    {ls.name}
                    <span
                      className="margin-left5"
                      removeName={ls.name}
                      onClick={handelDelete}
                    >
                      x
                    </span>{" "}
                  </p>
                </td>
                <td>
                  <p> {ls.email}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button type="submit" className="hidden" onClick={handelFocus}>
          add
        </button>
      </Form>
      <div className="material-table"></div>
    </>
  );
};

export default MultiSelect;
