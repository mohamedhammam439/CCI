import { useState } from "react";
import {
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import SingleSelect from "./SingleSelect";
import TableNumbers from "./TableNumbers";

const BasicForm = () => {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     setValidated(true);
  //   } else {
  //     event.preventDefault();
  //     setValidated(true);
  //   }
  // };
  // console.log(props);
  return (
    <>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>عضوية رقم</Form.Label>
        <Form.Control
          className="update-input"
          plaintext
          readOnly
          // defaultValue={props.name[0]}
        />
      </Form.Group>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>أسم المنشأة</Form.Label>
        <Form.Control
          className="update-input"
          plaintext
          readOnly
          defaultValue="المنشأة المصرية للصناعات الكيماوية )أيد("
        />
      </Form.Group>
      <Row>
        <Form.Group
          as={Col}
          md={8}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>
            رئيس مجلس الأدارة/ صاحب المنشأة المدون بالسجل التجاري
          </Form.Label>
          <Form.Control
            type="text"
            className="width-2"
            defaultValue="مراد السويفي"
            required
          />
        </Form.Group>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>الصـــــــــفــــــــــــــة</Form.Label>
          <Form.Control
            type="text"
            className="width-22"
            defaultValue="رئيس مجلس الادارة"
            required
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>تليفون أرضي</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>موبايل/واتساب</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label> البريد الالكتروني</Form.Label>
        <Form.Control
          type="email"
          className="update-input"
          placeholder="برجاء إدخال البريد الالكتروني"
          defaultValue="orascom@gmail.com"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>عنوان الادارة</Form.Label>
        <Form.Control
          type="text"
          className="update-input"
          placeholder="برجاء إدخال عنوان الادارة"
          defaultValue="128أ شارع الثورة مصر الجديدة"
          required
        />
      </Form.Group>
      <Row>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>تليفون أرضي</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>موبايل/واتساب</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group
        className="mb-3 right update-form"
        controlId="formBasicPassword"
      >
        <Form.Label>الموقع علي الانترنت</Form.Label>
        <Form.Control
          type="text"
          className="update-input"
          placeholder="برجاء إدخال موقع المنشأة علي الانترنت "
          defaultValue="www.sega.eg.com"
          required
        />
      </Form.Group>
      <Form.Group
        className="mb-3 right update-form"
        controlId="formBasicPassword"
      >
        <Form.Label>عنوان المصنع</Form.Label>
        <SingleSelect />
        <SingleSelect />
        <Form.Control
          type="text"
          className="width-44"
          placeholder="برجاء إدخال عنوان الادارة"
          defaultValue="المنطقة الصناعية الثالثة قطعة رقم 12"
          required
        />
      </Form.Group>
      <Row>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>تليفون أرضي</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
          <InputGroup className="mb-3 width-3">
            <FormControl type="number" defaultValue="242589655" required />
            <SingleSelect />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>عدد العاملين</Form.Label>
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال عدد العاملين "
            defaultValue="46"
            required
          />
        </Form.Group>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>رأس المال المرخص به</Form.Label>
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال راس المال "
            defaultValue="2000000"
            required
          />
        </Form.Group>

        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label> رأس المال المصدر بالسجل</Form.Label>
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال راس المال "
            defaultValue="2000000"
            required
          />
        </Form.Group>
      </Row>
      <h5>رقم التسجيل الضريبي للمنشأة من وثيقة بيانات مصلحة الضرائب</h5>
      <Row className="justify">
      <TableNumbers />
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>مأمورية ضرائب</Form.Label>
          <Form.Control
            type="number"
            className="width-22"
            placeholder="برجاء إدخال مأمورية الضرائب "
            required
            defaultValue="1254"
          />
        </Form.Group>
      </Row>

      <Table bordered>
        <thead>
          <tr>
            <th rowSpan={2}>قيمة رأس المال المصدر بالسجل التجاري</th>
            <th colSpan={2}>رأس المال المستثمر من واقع شهادة مكتب المحاسبة</th>
          </tr>
          <tr>
            <th> 2020 عام </th>
            <th>عام 2021</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control type="text" required defaultValue="55" />
            </td>
            <td>
              <Form.Control type="text" required defaultValue="55" />
            </td>
            <td>
              <Form.Control type="text" required defaultValue="55" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default BasicForm;
