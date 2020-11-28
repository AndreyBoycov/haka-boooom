import React, {Component} from 'react'
import './TablePage.scss'
import icon from '../../images/icon.svg'
import subtract from '../../images/iconGlas.svg'
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ApplicationRoot from "../../components/AplicationRoot/ApplicationRoot";
import Stepper from "./Stepper/StepperComponent";

const hasTheme = [
    {shortTitle: 'эксплуатация распределительных сетей',
     solutionDescription: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     date: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {shortTitle: 'эксплуатация распределительных сетей',
     solutionDescription: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     date: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {shortTitle: 'эксплуатация распределительных сетей',
     solutionDescription: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     date: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {shortTitle: 'эксплуатация распределительных сетей',
     solutionDescription: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     date: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {shortTitle: 'эксплуатация распределительных сетей',
     solutionDescription: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     date: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {shortTitle: 'эксплуатация распределительных сетей',
     solutionDescription: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     date: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    ];

const STEPS_LIST = [
    {name: 'step_1', completed: true, label: '1 этап', description: 'Краткое название'},
    {name: 'step_2', completed: false, label: '2 этап', description: 'Описание'},
    {name: 'step_3', completed: false, label: '3 этап', description: 'Затраты\\этапы'},
    {name: 'step_4', completed: false, label: '4 этап', description: 'Соглашение'},
    {name: 'step_5', completed: false, label: '5 этап', description: null}
];

const TablePage = props => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // render() {
        return(
            <div className='head-body'>
                <div className='body-table-pages'>
                    <div>
                        Рационализаторское предложение
                    </div>
                    <div className='stages'>
                        <Stepper stepsList={STEPS_LIST}/>
                    </div>
                </div>
                <div className='fields'>
                    <span>Категория</span>
                    <select>
                        <option>asd</option>
                        <option>a</option>
                    </select>
                    <span>Предложение</span>
                    <input type="text"/>
                    <span>Описание</span>
                    <textarea ></textarea>
                </div>
                <div className='has-theme'>
                    {hasTheme.map(item => {
                        return (
                            ApplicationRoot(item)
                        )
                    })}
                </div>
                <Button className='button-next-table-page'>
                    Далее
                    <SvgIcon component={ArrowForwardIcon}/>
                </Button>
            </div>
        )
    // }
}

export default TablePage
