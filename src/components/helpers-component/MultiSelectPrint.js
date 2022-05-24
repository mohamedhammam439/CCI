import React, { useContext } from "react";
import { Form, Table } from "react-bootstrap";
import { PresentStore } from "../../Contexts/PresentStore";

const MultiSelect = () => {
 const {list} = useContext(PresentStore)

  return (
    <>
      <Form className="material-input">
        <Table bordered>
          <thead>
            <tr>
              <th>النشاط الصناعي للمنشأة - المنتجات</th>
              <th>الطاقة الانتاجية السنوية</th>
            </tr>
          </thead>
          <tbody>
           
            {list.map((ls) => (
              <tr className="material-table">
                <td>
                  <p>
                    {" "}
                    {ls.mt1}
                  </p>
                </td>
                <td>
                  <p> {ls.mt2}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
      <div className="material-table"></div>
    </>
  );
};

export default MultiSelect;
