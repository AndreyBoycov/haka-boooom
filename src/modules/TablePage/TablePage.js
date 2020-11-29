import React, { useState } from 'react'
import './TablePage.scss'
import Stepper from "./Stepper/StepperComponent";
import CreateRequestPage1 from "./CreateRequestPage1/CreateRequestPage1";
import CreateRequestPage2 from "./CreateRequestPage2/CreateRequestPage2";
import CreateRequestPage3 from "./CreateRequestPage3/CreateRequestPage3";
import {Button} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SvgIcon from "@material-ui/core/SvgIcon";
import {addApplication} from "../../services/applications.service";
import CreateRequestPage4 from "./CreateRequestPage4/CreateRequestPage4";

const STEPS_LIST = [
    {name: 'step_1', completed: true, label: '1 этап', description: 'Краткое название'},
    {name: 'step_2', completed: false, label: '2 этап', description: 'Описание'},
    {name: 'step_3', completed: false, label: '3 этап', description: 'Затраты\\этапы'},
    {name: 'step_4', completed: false, label: '4 этап', description: 'Соглашение'},
    {name: 'step_5', completed: false, label: '5 этап', description: null}
];

// const dataSave = {
//     category:'',
//     suggestion:'',
//     description:'',
//     shortTitle: '',
//     userID: 5,
//     existingDisadvantages: '',
//     solutionDescription: '',
//     isEconomy: 1,
//     expectedPositiveEffect: '',
//     users: [{userID: 5,
//              percent: 50},
//             {userID: 5,
//              percent: 50}],
//     expenditures: [{costItem: '',
//                     sum: '',
//                     p_p: 1}],
//     termsForImplementation: [{stageName: '',
//                               days: '',
//                               p_p: ''}]
//     }

const TablePage = props => {
    const [stepsOfCreateRequest, setStepsOfCreateRequest] = useState(STEPS_LIST);
    const [activeStep, setActiveStep] = useState(0);
    const [stageOne, setStageOne] = useState({category:'', suggestion:'', description:''});
    const [stageFour, setStageFour] = useState([{userID: '', percent: ''}]);
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
            <CreateRequestPage1 props={stageOne}
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
            <CreateRequestPage3 props={tablesSaved}
                                stageOne={stageOne}
                                onChangeTables={tables => {setTablesSaved({...tablesSaved, ...tables})}}
                                />,
            <CreateRequestPage4 stageOne={stageOne}
                                stageFour={stageFour}
                                onChangeTables={tables => {setTablesSaved({...tablesSaved, ...tables})}}/>
        ];
        return steps.find((el, i) => {
            return index === i;
        });
    };

    const sendData = () => {
        const userInfo = JSON.parse(global.localStorage.user);
        let dataSave = {
            category: stageOne.category,
            suggestion: stageOne.suggestion,
            shortTitle: stageOne.description,
            userID: userInfo.id,
            existingDisadvantages: requestModel.descriptionDefect,
            solutionDescription: requestModel.descriptionDecide,
            isEconomy: 1,
            expectedPositiveEffect: requestModel.positiveEffect,
            users: [{userID: 5,
                     percent: 50},
                    {userID: 4,
                     percent: 50}],
            expenditures: tablesSaved.dataStage,
            termsForImplementation: tablesSaved.dataCostItems,
        };
        addApplication(userInfo.id, dataSave)
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
                    {activeStep > 0 &&
                    <Button color="primary"
                            onClick={sendData}
                            variant="outlined">
                        Сохранить
                    </Button>}
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
