import { Form, FormControl } from "react-bootstrap";
import { useState } from "react";

const UploadForm = () => {

  return (
    <>
        <Form.Group
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>شهادة المحاسب القانوني</Form.Label>
          <Form.Control className="update-input upload-file" type="file" required />
        </Form.Group>
        <Form.Group
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>أستمارة تحديث البيانات</Form.Label>
          <Form.Control className="update-input upload-file" type="file" required />
        </Form.Group>
        <Form.Group
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>إيصال الإيداع</Form.Label>
          <Form.Control className="update-input upload-file" type="file" required />
        </Form.Group>
        <Form.Group
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>السجل التجاري</Form.Label>
          <Form.Control className="update-input upload-file" type="file" required />
        </Form.Group>
    </>
  );
};

export default UploadForm;
