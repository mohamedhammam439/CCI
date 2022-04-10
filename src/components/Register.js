import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logos from "./Logos";
const Register = () => {
  return (
   <>
    <Logos />
    <div className="card">
    <div className="tittle">
      <h3>غرفة الصناعات الكيماوية </h3>
      <h3>بإتحاد الصناعات المصرية </h3>
    </div>
    <Row>
      <Col>
        <Link to="/currentCompany">
          <div className="cart">منشأة حالية بغرفة الصناعات الكيماوية</div>
        </Link>
      </Col>
      <Col>
        <Link to="/existCompany">
          <div className="cart">منشأة جديدة تملك سجل تجاري</div>
        </Link>
      </Col>
      <Col>
        <Link to="/newCompany">
          <div className="cart">منشأة جديدة لا تملك سجل تجاري</div>
        </Link>
      </Col>
    </Row>
  </div>
   </>
  );
};
export default Register;
