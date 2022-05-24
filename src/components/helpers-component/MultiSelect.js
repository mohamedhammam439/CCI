import React, { useContext } from "react";
import { useState, useRef } from "react";
import { Form, Table } from "react-bootstrap";
import { PresentStore } from "../../Contexts/PresentStore";

const MultiSelect = () => {
  const [mt1, setMt1] = useState("");
  const [mt2, setMt2] = useState("");
  const { addList, list, removeItem } = useContext(PresentStore);
  const FocusFun = useRef(null);

  const handelFocus = () => {
    FocusFun.current.focus();
  };

  const handelSubmitMultiSelect = (event) => {
    event.preventDefault();
    addList(mt1, mt2);
    setMt1("");
    setMt2("");
  };

  const handelDeleteMultiSelect = (e) => {
    removeItem(e);
  };

  return (
    <>
      <Form className="material-input" onSubmit={handelSubmitMultiSelect}>
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
                  value={mt1}
                  onChange={(event) => {
                    setMt1(event.target.value);
                  }}
                  ref={FocusFun}
                />
              </td>
              <td>
                <Form.Control
                  name="mt2"
                  value={mt2}
                  onChange={(event) => {
                    setMt2(event.target.value);
                  }}
                />
              </td>
            </tr>
            {list.map((ls) => (
              <tr className="material-table">
                <td>
                  <p>
                    {" "}
                    {ls.mt1}
                    <span
                      className="margin-left5"
                      removeName={ls.mt1}
                      onClick={handelDeleteMultiSelect}
                    >
                      x
                    </span>{" "}
                  </p>
                </td>
                <td>
                  <p> {ls.mt2}</p>
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
