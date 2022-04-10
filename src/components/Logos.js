import Logo1 from "../logo1.jpg";
import Logo2 from "../senaa.jpg";

const Logos = () => {
    return ( <div className="content">
    
    <img alt="logo" className="logo img-fluid" src={Logo2} />
    <img alt="logo" className="logo img-fluid" src={Logo1} />
  </div> );
}
 
export default Logos;