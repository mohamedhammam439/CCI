import { useState } from "react";
import { Col, Form, Modal, Row, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo1 from "../logo1.jpg";
import Logos from "./Logos";

const Update_membership = (props) => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setShow(false);
    } else {
      event.preventDefault();
      setValidated(true);
      setShow(true);
    }
  };
  console.log(props);

  return (
    <>
      <Logos />
      <div className="card_membership">
        <img src={Logo1} alt="logo" className="img-fluid logo" />
        <h4>إستمارة تحديث بيانات</h4>
        <Form
          className="update-all-form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="mb-3 right update-form"
            controlId="formBasicEmail"
          >
            <Form.Label>عضوية رقم</Form.Label>
            <Form.Control
              className="update-input"
              plaintext
              readOnly
              defaultValue={props.name}
            />
            <Form.Control.Feedback tooltip type="invalid">
              من فضلك قم بإدخال أسم المنشأة
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 right update-form"
            controlId="formBasicEmail"
          >
            <Form.Label>أسم المنشأة</Form.Label>
            <Form.Control
              className="update-input"
              plaintext
              readOnly
              defaultValue="المنشأة المصرية للمنظفات الصناعية (إيد)"
            />
            <Form.Control.Feedback tooltip type="invalid">
              من فضلك قم بإدخال أسم المنشأة
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
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
                placeholder="برجاء إدخال صفة المسؤل"
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                برجاء إدخال صفة المسؤل{" "}
              </Form.Control.Feedback>
            </Form.Group>
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
                placeholder="برجاء إدخال اسم رئيس مجلس الأدارة/ صاحب المنشأة المدون بالسجل التجاري"
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                برجاء إدخال اسم رئيس مجلس الأدارة/ صاحب المنشأة المدون بالسجل
                التجاري{" "}
              </Form.Control.Feedback>
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
              <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
              <Form.Control
                type="number"
                className="width-3"
                placeholder="برجاء إدخال رقم التليفون"
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                برجاء إدخال رقم التليفون
              </Form.Control.Feedback>
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
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                برجاء إدخال رقم الموبايل
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md={4}
              className="mb-3 right update-form"
              controlId="formBasicEmail"
            >
              <Form.Label>تليفون أرضي</Form.Label>
              <Form.Control
                type="number"
                className="width-3"
                placeholder="برجاء إدخال رقم التليفون"
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                برجاء إدخال رقم التليفون
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group
            className="mb-3 right update-form"
            controlId="formBasicEmail"
          >
            <Form.Label> البريد الالكتروني</Form.Label>
            <Form.Control
              type="email"
              className="update-input"
              placeholder="برجاء إدخال البريد الالكتروني"
              required
            />
            <Form.Control.Feedback tooltip type="invalid">
              برجاء إدخال البريد الالكتروني
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 right update-form"
            controlId="formBasicEmail"
          >
            <Form.Label>عنوان الادارة</Form.Label>
            <Form.Control
              type="text"
              className="update-input"
              placeholder="برجاء إدخال عنوان الادارة"
              required
            />
            <Form.Control.Feedback tooltip type="invalid">
              برجاء إدخال عنوان الادارة
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
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
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم الفاكس
              </Form.Control.Feedback>
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
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم الموبايل
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md={4}
              className="mb-3 right update-form"
              controlId="formBasicEmail"
            >
              <Form.Label>تليفون أرضي</Form.Label>
              <Form.Control
                type="number"
                className="width-3"
                placeholder="برجاء إدخال رقم التليفون "
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم التليفون
              </Form.Control.Feedback>
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
            />
            <Form.Control.Feedback tooltip type="invalid">
              برجاء إدخال موقع المنشأة علي الانترنت
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 right update-form"
            controlId="formBasicPassword"
          >
            <Form.Label>عنوان المصنع</Form.Label>
            <Form.Control
              type="text"
              className="update-input"
              placeholder="برجاء إدخال عنوان المصنع "
              required
            />
            <Form.Control.Feedback tooltip type="invalid">
              برجاء إدخال عنوان المصنع
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
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
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم الفاكس
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md={8}
              className="mb-3 right update-form"
              controlId="formBasicEmail"
            >
              <Form.Label>تليفون</Form.Label>
              <Form.Control
                type="number"
                className="update-input-1"
                placeholder="برجاء إدخال رقم التليفون "
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم التليفون
              </Form.Control.Feedback>
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
              <Form.Label>فــــــــــاكـــــــــــــس</Form.Label>
              <Form.Control
                type="number"
                className="width-3"
                placeholder="برجاء إدخال رقم الفاكس "
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم الفاكس
              </Form.Control.Feedback>
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
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم الموبايل
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md={4}
              className="mb-3 right update-form"
              controlId="formBasicEmail"
            >
              <Form.Label>تليفون أرضي</Form.Label>
              <Form.Control
                type="number"
                className="width-3"
                placeholder="برجاء إدخال رقم التليفون "
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                من فضلك قم بإدخال رقم التليفون
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <h5>
            رقم التسجيل الضريبي للمنشأة من وثيقة بيانات مصلحة الضرائب (تسعة
            أرقام)
          </h5>
          <Row className="justify">
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
              />
              <Form.Control.Feedback tooltip type="invalid">
                برجاء إدخال مأمورية الضرائب
              </Form.Control.Feedback>
            </Form.Group>
            <Table className="table-update">
              <tbody>
                <tr>
                  <td>
                    <Form.Control type="number" required  min={0} max={9} />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                  <td>
                    <Form.Control type="number" required min={0} max={9}  />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <h5>
            البيانات المطلوب تعديلها في شهادة العضوية طبقا لاحدث المستندات
            المتقدمة
          </h5>
          <Table bordered>
            <thead>
              <tr>
                <th>الخامات المستخدمة</th>
                <th>الطاقة الانتاجية الثانوية</th>
                <th>النشاط الصناعي للمنشأة (المنتجات)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered>
            <thead>
              <tr>
                <th colSpan={2}>
                  رأس المال المستثمر من واقع شهادة مكتب المحاسبة
                </th>
                <th rowSpan={2}>قيمة رأس المال المصدر بالسجل التجاري</th>
              </tr>
              <tr>
                <th>عام 2021</th>
                <th> 2020 عام </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
              </tr>
            </tbody>
          </Table>
          <Form.Group className="mb-3 file-chosen">
            <Form.Control type="file" required />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              required
              label="اقر بأن هذه البيانات المدونة أعلاه صحيحةو مطابقة للواقع و اتعهد بإخطار الغرفة عند أي تغير يطرأ عليها في حينه"
            />
          </Form.Group>

          <Button className="btn" type="submit">
            تحديث
          </Button>
        </Form>
        <Modal
          show={show}
          centered
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p>شكرا لقد استلمنا طلبكم و جاري المراجعة</p>
            <Link to="/motalba">
              <Button>تم</Button>
            </Link>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Update_membership;
