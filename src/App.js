import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Payment from "./components/Payment";
import UpdateSteps from "./components/UpdateSteps";
import Certifecate from "./components/Certifecate";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cci" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/currentCompany" element={<CurrentCompany />} />
          <Route path="/existCompany" element={<ExistCompany />} />
          <Route path="/newCompany" element={<NewCompany />} />
          <Route path="/temperory_membership" element={<Temperory_membership />} />
          <Route path="/new_membership" element={<New_membership />} />
          <Route path="/motalba" element={<Motalba />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/updateSteps" element={<UpdateSteps />} />
          <Route path="/Certifecate" element={<Certifecate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
