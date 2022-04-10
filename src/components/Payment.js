import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo1 from "../logo1.jpg";
import Visa from "../visa.png";
import Mastercard from "../mastercard.png";
import Paypal from "../paypal.png";
import Logos from "./Logos";

const Payment = () => {
  return (
    <>
      <Logos />
      <div className="card_membership">
        <img src={Logo1} alt="logo" className="img-fluid logo" />
        <h4 className=" mb-5">Payment</h4>
        <Container>
          <Row>
            <Col>
              <h6>Visa</h6>
              <img src={Visa} alt="logo" className="img-fluid logo" />
            </Col>
            <Col>
              <h6>Master Card</h6>
              <img src={Mastercard} alt="logo" className="img-fluid logo" />
            </Col>
            <Col>
              <h6>Paypal</h6>
              <img src={Paypal} alt="logo" className="img-fluid logo" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Payment;
