import Logos from "./Logos";
import "./Certifecate.css";
import { Col, Row } from "react-bootstrap";

const Certifecate = () => {
  return (
    <>
      <Logos />
      <div className="certificate">
        <h2 className="main-tittle">شهــــادة عضوية</h2>
        <h6 className="A2nd-tittle">
          عناية السادة \ الهيئة العامة للتنمية الصناعية
        </h6>
        <h4 className="A3rd-tittle">تشهد غرفة الصناعات الكيماوية بأن </h4>
        <h3 className="A4th-tittle">الشركة المصرية للمنظفات الصناعية</h3>
        <p className="side-tittle">المركز الرئيسي</p>
        <h6 className="A5th-tittle">قطعة 34 - المنطقة الصناعية الاولي- مدينة السادات - محافظة المنوفية</h6>
        <h6 className="A5th-tittle">عضو بغرفة الصناعات الكيماوية تحت رقم 585</h6>
        <h6 className="A5th-tittle">وقد تم سداد الاشتراك السنوي حتي 31\12\2022</h6>
        <p className="A2nd-tittle">النشاط: منظفات صناعية - صابون غسالات اطباق - ملح غسالات اطباق - مساعد شطف لغسالات الاطباق - مطهرات - كيماويات تعقيم و تطهير المصانع</p>
        <Row className="mb-5 mt-5">
        <Col>
            <h5 className="signal">المدير التنفيذي للغرفة</h5>
            <h5>مهندس إستشاري \ ضياء الدين حمزة</h5>
        </Col>
        <Col>
            <h5 className="mt-1">تحريرا في 2\2\2022</h5>
            <h5>تاريخ إنتهاء السريان  31\12\2022</h5>
        </Col>
        </Row>
        </div>
        <footer>
            <Row>
                <Col className="left-col">
                    <h6>1195 Nile Corrnish , Federation Of Egypt Industries Bldg</h6>
                    <h6>Cairo, Egypt</h6>
                    <h6>Phone: 25797021 \ 25797031</h6>
                    <h6>Fax : 25756117</h6>
                    <h6>Emai : cciegypt@yahoo.com</h6>
                </Col>
                <Col className="right-col">
                <h6>1195 كورنيش النيل - مبني اتحاد الصناعات المصرية</h6>
                    <h6>القاهرة , مصر</h6>
                    <h6>تليفون : 25797021 \ 25797031</h6>
                    <h6>فاكس: 25756117</h6>
                    <h6>البريد الالكتروني : cciegypt@yahoo.com</h6></Col>
            </Row>
        </footer>
    </>
  );
};

export default Certifecate;
