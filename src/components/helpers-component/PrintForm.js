import { useContext } from "react";

import { Row } from "react-bootstrap";
import { Col, Form, FormControl, InputGroup, Table } from "react-bootstrap";
import Button from "@mui/material/Button";
import SingleSelect from "./SingleSelect";
import MultiSelectPrint from "./MultiSelectPrint";
import MaterialTablePrint from "./MaterialTablePrint";
import { PresentStore } from "../../Contexts/PresentStore";

const PrintForm = () => {
  const {
    ccn,
    ccm,
    mangername,
    mangerposition,
    mangertel,
    mangermob,
    mangerfax,
    mangeremail,
    mangeraddress,
    headtel,
    headmob,
    headfax,
    heademail,
    factorytel,
    factoryfax,
    workersnum,
    firstmoney,
    seglmoney,
    taxs,
    moneyval,
    moneyy1,
    moneyy2,
    t1,
    t2,
    t3,
    t4,
    t5,
    t6,
    t7,
    t8,
    t9,
    select1,select2,factoryAddress
  } = useContext(PresentStore);
  const handelPrint = () => {
    window.print();
  };
  return (
    <div className="printform">
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>عضوية رقم</Form.Label>
        <Form.Control className="update-input" plaintext readOnly value={ccm} />
      </Form.Group>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>أسم المنشأة</Form.Label>
        <Form.Control className="update-input" plaintext readOnly value={ccn} />
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
            value={mangername}
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
            value={mangerposition}
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
              value={mangertel}
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
            value={mangermob}
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
            value={mangerfax}
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
          value={mangeremail}
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
          value={mangeraddress}
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
              value={headtel}
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
            value={headmob}
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
            value={headfax}
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
          value={heademail}
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
       <p className="width-custom-select">{select1}</p>
       <p className="width-custom-select">{select2}</p>
        <Form.Control
          type="text"
          className="width-44"
          placeholder="برجاء إدخال عنوان الادارة"
          defaultValue="المنطقة الصناعية الثالثة قطعة رقم 12"
          value={factoryAddress}
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
              value={factorytel}
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
            value={factoryfax}
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
            value={workersnum}
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
            value={firstmoney}
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
            value={seglmoney}
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
                  value={t1}
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
                  value={t2}
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
                  value={t3}
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
                  value={t4}
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
                  value={t5}
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
                  value={t6}
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
                  value={t7}
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
                  value={t8}
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
                  value={t9}
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
            value={taxs}
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
              <Form.Control type="text" plaintext value={moneyval} readOnly />
            </td>
            <td>
              <Form.Control type="text" plaintext value={moneyy1} readOnly />
            </td>
            <td>
              <Form.Control type="text" plaintext value={moneyy2} readOnly />
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>
        البيانات المطلوب تعديلها في شهادة العضوية طبقا لاحدث المستندات المتقدمة
      </h5>
      <MultiSelectPrint />
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
              <MaterialTablePrint />
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
