import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import CurrentCompany from "./components/CurrentCompany";
import ExistCompany from "./components/ExistCompany";
import Home from "./components/Home";
import Login from "./components/login";
import Motalba from "./components/Motalba";
import NewCompany from "./components/NewCompany";
import New_membership from "./components/New_membership";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Temperory_membership from "./components/Temperory_membership";
import Update_membership from "./components/Update_membership";
import Payment from "./components/Payment";
import UpdateSteps from "./components/UpdateSteps";
import Certifecate from "./components/Certifecate";
import MaterialTable from "./components/helpers-component/MaterialTable";
import MultiSelect from "./components/helpers-component/MultiSelect";


// getting data
const getDatafromCurrent=()=>{
  const dataCurrent= localStorage.getItem('current')
  if (dataCurrent){
    return JSON.parse(dataCurrent)
  } else {
    return []
  }
}

const App = () => {

  
 // main object for currentcompany
 const [current, setCurrent] = useState(getDatafromCurrent())
  
 const [name,setName]=useState("")
 const [segel,setSegel]=useState("")
 const [member,setMember]=useState("")

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentData= {name , segel , member}
    setCurrent([...current, currentData])

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      // console.log("not submit the form")
    } else {
      window.location.pathname = "/updateSteps";
      setValidated(true);
      // console.log("submitted the form")
    }
  };
  
  // saving data
  useEffect(()=>{
    localStorage.setItem('current',JSON.stringify(current));
  }, [current])
  
  const handelName=(e)=>{
    setName(e.target.value)
  }
  const handelSegel=(e)=>{
    setSegel(e.target.value)
  }
  const handelMember=(e)=>{
    setMember(e.target.value)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/currentCompany" element={<CurrentCompany 
            validated={validated}
            handleSubmit={handleSubmit}
            handelName={handelName}
            handelSegel={handelSegel}
            handelMember={handelMember}
            name={name}
            segel={segel}
            member={member}
            />} />
          <Route path="/existCompany" element={<ExistCompany />} />
          <Route path="/newCompany" element={<NewCompany />} />
          <Route path="/update_membership" element={<Update_membership  />} />
          <Route
            path="/temperory_membership"
            element={<Temperory_membership />}
          />
          <Route path="/new_membership" element={<New_membership />} />
          <Route path="/motalba" element={<Motalba />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/updateSteps" element={<UpdateSteps name={name} member={member} />} />
          <Route path="/Certifecate" element={<Certifecate />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
