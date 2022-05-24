import * as React from "react";
import { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Logos from "./Logos";

import PrintForm from "./helpers-component/PrintForm";
import UploadForm from "./helpers-component/UploadForm";
import Motalba from "./helpers-component/Motalba";
import { Link } from "react-router-dom";
import { PresentStore } from "../Contexts/PresentStore";
import BasicFormTemp from "./helpers-component/BasicFormTemp";

const Temperory_membership = () => {
  const [activeStep, setActiveStep] = useState(0);
  // const [validated, setValidated] = useState(false);
  const { validated, setValidated } = useContext(PresentStore);
  const steps = [
    "بيانات الأتصال",
    " المطالبة",
    "طباعة البيانات",
    "رفع المستندات",
  ];
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Form
            className="update-all-form"
            noValidate
            validated={validated}
            onSubmit={handleNext}
          >
            <BasicFormTemp />
            <Button className="btn-form" type="submit">
              التالي
            </Button>
          </Form>
        );
      case 1:
        return <Motalba />;
      case 2:
        return <PrintForm />;

      case 3:
        return (
          <div className="uploadform">
            <Form
              className="update-all-form"
              noValidate
              validated={validated}
              onSubmit={handleNext}
            >
              <UploadForm />
              <Button className="btn-form" type="submit">
                Finish
              </Button>
            </Form>
          </div>
        );

      default:
        return "unknown step";
    }
  }

  const handleNext = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      console.log("not submit");
    } else {
      event.preventDefault();
      setValidated(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Logos />
      <div className="card_membership">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <div className="final-step">
              <h6 className="A3rd-tittle" sx={{ mt: 2, mb: 1 }}>
                تم الانتهاء من تحديث البيانات للحصول علي الشهادة
                <br />
              </h6>
              <Link to="/Certifecate">أضغط هنا</Link>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
              </Box>
            </div>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {" "}
                {getStepContent(activeStep)}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  className="btn-form-back"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  السابق
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  onClick={handleNext}
                  disabled={activeStep === 0}
                  className={
                    activeStep === 0 || activeStep === 3 ? "hidden" : ""
                  }
                >
                  {activeStep === steps.length - 1 ? "Finish" : "التالي"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
};

export default Temperory_membership;
