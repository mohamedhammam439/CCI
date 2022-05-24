import { useContext } from "react";

import {
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { PresentStore } from "../../Contexts/PresentStore";
import SingleSelect1 from "./SingleSelect";
import SingleSelect2 from "./SingleSelect2";
import SingleSelectNumber from "./SingleSelectNumber";
import TableNumbers from "./TableNumbers";

const BasicFormTemp = () => {
  const {
    ccn,
    ccm,
    setMangername,
    setMangerposition,
    setMangertel,
    setMangermob,
    setMangerfax,
    setMangeremail,
    setMangeraddress,
    setHeadmob,
    setHeadtel,
    setHeadfax,
    setHeademail,
    setFactorytel,
    setFactoryfax,
    setWorkersnum,
    setFirstmoney,
    setSeglmoney,
    setTaxs,
    setMoneyval,
    setMoneyy1,
    setMoneyy2,
    setFactoryAddress
    
  } = useContext(PresentStore);
  return (
    <>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>أسم المنشأة</Form.Label>
        <Form.Control
          className="update-input"
          plaintext
          readOnly
          defaultValue={ccn}
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
            placeholder="ادخال اسم صاحب المنشأة"
            required
            defaultValue="5"
            onChange={(e) => setMangername(e.target.value)}
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
            placeholder="الصفة"
            required
            defaultValue="5"
            onChange={(e) => setMangerposition(e.target.value)}
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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setMangertel(e.target.value)}
            />
            <SingleSelectNumber />
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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setMangermob(e.target.value)}
            />
            <SingleSelectNumber />
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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setMangerfax(e.target.value)}
            />
            <SingleSelectNumber />
          </InputGroup>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label> البريد الالكتروني</Form.Label>
        <Form.Control
          type="email"
          className="update-input"
          placeholder="برجاء إدخال البريد الالكتروني"
          required
          defaultValue="5@dd"
          onChange={(e) => setMangeremail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 right update-form" controlId="formBasicEmail">
        <Form.Label>عنوان الادارة</Form.Label>
        <Form.Control
          type="text"
          className="update-input"
          placeholder="برجاء إدخال عنوان الادارة"
          required
          defaultValue="5"
          onChange={(e) => setMangeraddress(e.target.value)}
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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setHeadtel(e.target.value)}
            />
            <SingleSelectNumber />
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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setHeadmob(e.target.value)}
            />
            <SingleSelectNumber />
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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setHeadfax(e.target.value)}
            />
            <SingleSelectNumber />
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
          required
          defaultValue="5"
          onChange={(e) => setHeademail(e.target.value)}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 right update-form"
        controlId="formBasicPassword"
      >
        <Form.Label>عنوان المصنع</Form.Label>
        <SingleSelect1 />
        <SingleSelect2 />
        <Form.Control
          type="text"
          className="width-44"
          placeholder="برجاء إدخال عنوان الادارة"
          required
          defaultValue="3"
          onChange={(e) => setFactoryAddress(e.target.value)}

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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setFactorytel(e.target.value)}
            />
            <SingleSelectNumber />
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
            <FormControl
              type="number"
              placeholder="123456"
              required
              defaultValue="5"
              onChange={(e) => setFactoryfax(e.target.value)}
            />
            <SingleSelectNumber />
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
            required
            defaultValue="5"
            onChange={(e) => setWorkersnum(e.target.value)}
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
            required
            defaultValue="5"
            onChange={(e) => setFirstmoney(e.target.value)}
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
            required
            defaultValue="5"
            onChange={(e) => setSeglmoney(e.target.value)}
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
            defaultValue="5"
            onChange={(e) => setTaxs(e.target.value)}
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
              <Form.Control
                type="text"
                required
                defaultValue="5"
                onChange={(e) => setMoneyval(e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                required
                defaultValue="5"
                onChange={(e) => setMoneyy1(e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                required
                defaultValue="5"
                onChange={(e) => setMoneyy2(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default BasicFormTemp;
