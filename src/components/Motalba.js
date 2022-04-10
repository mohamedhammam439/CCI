import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo1 from "../logo1.jpg";
import Logos from "./Logos";

const Motalba = () => {
  return (
   <>
    <Logos />
    <div className="card_membership">
    <img src={Logo1} alt="logo" className="img-fluid logo" />
    <h4>مطالبة بالاموال </h4>
    <h6>تقدير المبلغ المطلوب 2680</h6>
    <Link to="/payment"><Button className="btn">Payment</Button></Link>
    
  </div>
   </>
  );
};

export default Motalba;
