import React, { useState } from 'react'
import './TablePage.scss'
import Stepper from "./Stepper/StepperComponent";
import CreateRequestPage1 from "./CreateRequestPage1/CreateRequestPage1";
import CreateRequestPage2 from "./CreateRequestPage2/CreateRequestPage2";
import CreateRequestPage3 from "./CreateRequestPage3/CreateRequestPage3";
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
    const [activeStep, setActiveStep] = useState(0);
    const [stageOne, setStageOne] = useState({category:'', suggestion:'', description:''});
    const [requestModel, setRequestModel] = useState({descriptionDefect: '', descriptionDecide: '', positiveEffect: ''});
    const [tablesSaved, setTablesSaved] = useState({dataCostItems: [], dataStage: []});

    const handlerSelectStep = (stepsOfCreateRequest, selectStepIndex) => {
        setStepsOfCreateRequest(stepsOfCreateRequest);
        setActiveStep(selectStepIndex);
    }

    const setNextStep = () => {
        setActiveStep(activeStep + 1);
    }

    const getStepRender = (index) => {
        const steps = [
            <CreateRequestPage1 onNextStep={setNextStep}
                                props={stageOne}
                                changeStageOne={stageOut =>
                                    setStageOne({...stageOut})
                                }
            />,
            <CreateRequestPage2
                requestModel={requestModel}
                inStageOne={stageOne}
                onChangeDescription={description =>
                    setRequestModel({...requestModel, ...description})
                }
            />,

            <CreateRequestPage3 onNextStep={setNextStep}
                                props={tablesSaved}
                                stageOne={stageOne}
                                onChangeTables={tables => {setTablesSaved({...tablesSaved, ...tables})}}
                                />,
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
                <div style={{height: '0'}}>
                </div>
                <div style={{overflow: 'hidden'}}>
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
