import React, {useState} from "react";
import Step from "@material-ui/core/Step";
import {StepButton} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import './Stepper.scss'

const getSelectedStepIndex = (steps) => {
    let lastSelectedIndex = 0;
    for (let i = 0; i < steps.length; i++) {
        if (steps[i].completed) {
            lastSelectedIndex = i;
        }
    }

    return lastSelectedIndex;
}

const StepperComponent = (props) => {
    const { onSelectStep } = props;
    const [ stepsList, setSteps ] = useState(props.stepsList);
    const [ activeStep, setActiveStep ] = useState(0);

    const handleSelectStep = (index) => {
        if(index > getSelectedStepIndex(stepsList)) {
            return;
        }
        const newStepsList = stepsList.map((el, i) => {
            if (i === index) {
                el = {...el, completed: true};
            }
            return el;
        });
        setSteps(newStepsList);
        onSelectStep(newStepsList, index);
    }

    const getSteps = () => {
        return stepsList.map((step, index) => (
                <Step
                    key={step.name}
                    completed={step.completed}>
                    <StepButton onClick={() => handleSelectStep(index)}>{step.label}<br/>{step.description}</StepButton>
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
