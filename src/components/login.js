import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logos from "./Logos";
const Login = () => {
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
      window.location.pathname = "/home";
      setValidated(true);
      // console.log("submitted the form")
    }
  };

  return (
   <>
    <Logos />
    <div className="card">
    <div className="tittle">
      <h3>تسجيل الدخول لغرفة الصناعات الكيماوية </h3>
      <h3>بإتحاد الصناعات المصرية </h3>
    </div>

    <Form noValidate validated={validated} onSubmit={handleSubmit} className="login">
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
      <Form.Group className="mb-3 right" controlId="formBasicEmail">
        <Form.Label>رقم السجل التجاري</Form.Label>
        <Form.Control
          type="number"
          placeholder="برجاء إدخال رقم السجل التجاري"
          required
        />
        <Form.Control.Feedback type="invalid">
          من فضلك قم بإدخال رقم السجل
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 right" controlId="formBasicPassword">
        <Form.Label>رقم العضوية</Form.Label>
        <Form.Control type="number" placeholder="رقم العضوية" required />
        <Form.Control.Feedback type="invalid">
          من فضلك قم بإدخال رقم العضوية
        </Form.Control.Feedback>
      </Form.Group>
      <Button className="btn" type="submit">
        دخول
      </Button>
      <Link to="/register">
        <p>للتسجيل لأول مرة</p>
      </Link>
    </Form>
  </div>
   </>
  );
};
export default Login;
