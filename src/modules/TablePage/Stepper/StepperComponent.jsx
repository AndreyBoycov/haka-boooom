import React, {useState} from "react";
import Step from "@material-ui/core/Step";
import {StepButton} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import styles from './Stepper.scss'
import StepLabel from "@material-ui/core/StepLabel";

const StepperComponent = (props) => {
    const { stepsList } = props;
    const [ steps, setSteps ] = useState(stepsList);
    const [ activeStep, setActiveStep ] = useState(0);

    const handleStep = (index) => {

    }

    const getSteps = () => {
        debugger;
        return steps.map(step => (
                <Step
                    key={step.name}
                    completed={step.completed}>
                    <StepLabel>{step.label}<br/>{step.description}</StepLabel>
                </Step>
            ));
    };

    return(
        <Stepper className="root_stepper_container"
                 alternativeLabel
                 nonLinear
                 activeStep={activeStep}>
            { getSteps() }
        </Stepper>
    );
};

export default StepperComponent;