import Logo1 from "../logo1.jpg";
import Logos from "./Logos";

const New_membership = () => {
  return (
    <>
      <Logos />
      <div className="card_membership">
        <img src={Logo1} alt="logo" className="img-fluid logo" />
        <h4>إستمارة عضوية جديدة </h4>
      </div>
    </>
  );
};

export default New_membership;
