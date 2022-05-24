import { useContext } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { PresentStore } from "../Contexts/PresentStore";
import Logos from "./Logos";

const CurrentCompany = () => {
  const {
    validated,
    handleSubmit,
    setCcn,
    setCcs,
    setCcm,
  } = useContext(PresentStore);
  return (
    <>
      <Logos />
      <div className="card">
        <div className="tittle">
          <h3>التسجيل لمنشأة حالية بغرفة الصناعات الكيماوية</h3>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3 right" controlId="formBasicEmail">
            <Form.Label>أسم المنشأة</Form.Label>
            <Form.Control
              type="text"
              placeholder="برجاء إدخال أسم المنشأة"
              required
              onChange={(e)=>setCcn(e.target.value)}
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
              onChange={(e)=>setCcs(e.target.value)}

            />
            <Form.Control.Feedback type="invalid">
              من فضلك قم بإدخال رقم السجل
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 right" controlId="formBasicPassword">
            <Form.Label>رقم العضوية</Form.Label>
            <Form.Control
              type="number"
              placeholder="رقم العضوية"
              required
              onChange={(e)=>setCcm(e.target.value)}

            />
            <Form.Control.Feedback type="invalid">
              من فضلك قم بإدخال رقم العضوية
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
export default CurrentCompany;
