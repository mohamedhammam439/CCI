import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logos from "./Logos";
const NewCompany = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      // console.log("not submit the form")
    } else {
      event.preventDefault();
      window.location.pathname = "/temperory_membership";
      setValidated(true);
      // console.log("submitted the form")
    }
  };

  return (
   <>
    <Logos />
    <div className="card">
    <div className="tittle">
      <h3>التسجيل لمنشأة جديدة بدون سجل بغرفة الصناعات الكيماوية</h3>
    </div>

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 right" controlId="formBasicEmail">
        <Form.Label>أسم المنشأة</Form.Label>
        <Form.Control
          type="text"
          placeholder="برجاء إدخال أسم المنشأة"
          required
        />
        <Form.Control.Feedback type="invalid">
          من فضلك قم بإدخال أسم المنشأة
        </Form.Control.Feedback>
      </Form.Group>

        <Button className="btn" type="submit">
          تسجيل
        </Button>
    </Form>
  </div>
   </>
  );
};
export default NewCompany;
