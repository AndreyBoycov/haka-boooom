import React, { useState } from 'react'
import './TablePage.scss'
import Stepper from "./Stepper/StepperComponent";
import CreateRequestPage1 from "./CreateRequestPage1/CreateRequestPage1";
import CreateRequestPage2 from "./CreateRequestPage2/CreateRequestPage2";
import {Button} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SvgIcon from "@material-ui/core/SvgIcon";

const STEPS_LIST = [
    {name: 'step_1', completed: true, label: '1 этап', description: 'Краткое название'},
    {name: 'step_2', completed: false, label: '2 этап', description: 'Описание'},
    {name: 'step_3', completed: false, label: '3 этап', description: 'Затраты\\этапы'},
    {name: 'step_4', completed: false, label: '4 этап', description: 'Соглашение'},
    {name: 'step_5', completed: false, label: '5 этап', description: null}
];

const TablePage = props => {
    const [stepsOfCreateRequest, setStepsOfCreateRequest] = useState(STEPS_LIST);
    const [activeStep, setActiveStep] = useState(1);
    const [requestModel, setRequestModel] = useState({});

    const handlerSelectStep = (stepsOfCreateRequest, selectStepIndex) => {
        setStepsOfCreateRequest(stepsOfCreateRequest);
        setActiveStep(selectStepIndex);
    }

    const setNextStep = () => {
        setActiveStep((prevValue) => prevValue + 1);
    }

    const getStepRender = (index) => {
        const steps = [
            <CreateRequestPage1 onNextStep={setNextStep}/>,
            <CreateRequestPage2
                requestDescription={
                    {
                        category: requestModel?.category,
                        theme: requestModel?.theme,
                        shortName: requestModel?.shortName,
                        description: requestModel?.description,
                        descriptionDefect: requestModel?.descriptionDefect,
                        descriptionDecide: requestModel?.descriptionDecide,
                        positiveEffect: requestModel?.positiveEffect
                    }
                }
                onChangeDescription={description =>
                    setRequestModel({...requestModel, ...description})
                }
            />
        ];
        return steps.find((el, i) => {
            return index === i;
        });
    };

    // render() {
        return(
            <div className='head-body'>
                <div className='body-table-pages'>
                    <div>
                        Рационализаторское предложение
                    </div>
                    <div className='stages'>
                        <Stepper stepsList={stepsOfCreateRequest} onSelectStep={handlerSelectStep}/>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    { getStepRender(activeStep) }
                </div>

                <div className="service_panel">
                    {activeStep > 0 && <Button color="primary" variant="outlined">Сохранить</Button>}
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={setNextStep}
                    >
                        Далее
                        <SvgIcon component={ArrowForwardIcon}/>
                    </Button>
                </div>
            </div>
        )
    // }
}

export default TablePage
