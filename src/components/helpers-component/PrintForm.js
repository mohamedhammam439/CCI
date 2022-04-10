import { Row } from "react-bootstrap";
import {
    Col,
    Form,
    FormControl,
    InputGroup,
    Table,
  } from "react-bootstrap";
  import Button from "@mui/material/Button";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import MaterialTable from "./MaterialTable";
const PrintForm = () => {
  const handelPrint = () => {
    window.print()
  }
  return (
    <div className="printform">
   
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>عضوية رقم</Form.Label>
        <Form.Control
          className="update-input"
          plaintext
          readOnly
          defaultValue="545"
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
            plaintext
            readOnly
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
            plaintext
            readOnly
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
          <InputGroup className="width-3">
            <FormControl
              defaultValue="25698745"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
              required
              plaintext
              readOnly
            />
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
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال رقم الموبايل"
            defaultValue="01005248795"
            required
            plaintext
            readOnly
          />
        </Form.Group>

        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال رقم التليفون"
            defaultValue="2654832"
            required
            plaintext
            readOnly
          />
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
          plaintext
          readOnly
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
          plaintext
          readOnly
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
          <InputGroup className="width-3">
            <FormControl
              defaultValue="25698745"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
              required
              plaintext
              readOnly
            />
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
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال رقم الموبايل "
            defaultValue="01223589475"
            required
            plaintext
            readOnly
          />
        </Form.Group>

        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          {" "}
          <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال رقم الفاكس "
            defaultValue="2369547"
            required
            plaintext
            readOnly
          />
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
          plaintext
          readOnly
        />
      </Form.Group>
      <Form.Group
        className="mb-3 right update-form"
        controlId="formBasicPassword"
      >
        <Form.Label>عنوان المصنع</Form.Label>
        <SingleSelect  />
        <SingleSelect  />
        <Form.Control
          type="text"
          className="width-44"
          placeholder="برجاء إدخال عنوان الادارة"
          defaultValue="المنطقة الصناعية الثالثة قطعة رقم 12"
          plaintext
          readOnly
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
          <InputGroup className="width-3">
            <FormControl
              defaultValue="25698745"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
              required
              plaintext
              readOnly
            />
          </InputGroup>
        </Form.Group>
        <Form.Group
          as={Col}
          md={4}
          className="mb-3 right update-form"
          controlId="formBasicEmail"
        >
          <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
          <Form.Control
            type="number"
            className="width-22"
            placeholder="برجاء إدخال رقم الفاكس "
            defaultValue="2548795"
            required
            plaintext
            readOnly
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
          {" "}
          <Form.Label>عدد العاملين</Form.Label>
          <Form.Control
            type="number"
            className="width-3"
            placeholder="برجاء إدخال عدد العاملين "
            defaultValue="46"
            required
            plaintext
            readOnly
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
            plaintext
            readOnly
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
            plaintext
            readOnly
          />
        </Form.Group>
      </Row>
      <h5>
        رقم التسجيل الضريبي للمنشأة من وثيقة بيانات مصلحة الضرائب (تسعة أرقام)
      </h5>
      <Row className="justify">
        <Table className="table-update">
          <tbody>
            <tr>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  required
                  maxLength="1"
                  defaultValue="5"
                  min={0}
                  max={9}
                  plaintext
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </Table>
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
            defaultValue="65845755"
            required
            plaintext
            readOnly
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
              <Form.Control type="text"  plaintext defaultValue="1500000"
              readOnly />
            </td>
            <td>
              <Form.Control type="text"   plaintext defaultValue="1500000"
              readOnly/>
            </td>
            <td>
              <Form.Control type="text"  plaintext defaultValue="1500000"
              readOnly />
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>
        البيانات المطلوب تعديلها في شهادة العضوية طبقا لاحدث المستندات المتقدمة
      </h5>
    <MultiSelect />
      <h5>
      الخامات المستخدمة طبقا لاحدث المستندات المتقدمة
    </h5>
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

      <Button className="btn" onClick={handelPrint}>
        طباعة
      </Button>
    </div>
  );
};

export default PrintForm;
