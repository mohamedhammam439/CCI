import { useState } from "react";

import {
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import Select from "react-select";
import MaterialTable from "./MaterialTable";
import MultiSelect from "./MultiSelect";

export const NumberCode = [
  { value: 2, label: 2, isFixed: true },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 13, label: 13 },
  { value: 45, label: 45 },
];

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      // setShow(false);
    } else {
      event.preventDefault();
      setValidated(true);
      // setShow(true);
    }
  };

  return (
    <div>
      <h5>
        البيانات المطلوب تعديلها في شهادة العضوية طبقا لاحدث المستندات المتقدمة
      </h5>
      <MultiSelect />

      <h5>الخامات المستخدمة طبقا لاحدث المستندات المتقدمة</h5>
      <Table bordered>
        <thead>
          <tr>
            <th>الخامات المستخدمة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <MaterialTable />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ContactForm;
