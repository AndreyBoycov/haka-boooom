import React, {useState} from "react";
import './CreateRequestPage3.scss';

//    {no: '',
//     nameStage: '',
//     termDays: ''}


//    {no: '1',
//     costItems: 'asdfas',
//     sum: 'asdfas'},

// const dataCostItems = [];

// const dataStage = [];

const CreateRequestPage3 = (props) => {
    const {onChangeTables, stageOne} = props;

    const [dataCostItems, setDataCostItems] = React.useState(props.props.dataCostItems);
    const [dataStage, setDataStage] = React.useState(props.props.dataStage);

    const changeCostItemValue = (event, index, kye) => {
        dataCostItems[index][kye] = event.target.value;
        onChangeTables({dataCostItems, dataStage})
    };

    const changeStageValue = (event, index, kye) => {
        dataStage[index][kye] = event.target.value;
        onChangeTables({dataCostItems, dataStage})
    };

    const addCostItems = () => {
        setDataCostItems((prevValue) => [...prevValue, {no: '', nameStage: '', termDays: ''}]);
        onChangeTables({dataCostItems, dataStage})
    };
    const addStage = () => {
        setDataStage((prevValue) => [...prevValue, {no: '', costItems: '', sum: ''}]);
        onChangeTables({dataCostItems, dataStage})
    };

    return (
        <div>
            <div className='theme-grid-table'>
                <div className='g-2-table'>
                    <span className='text-c-r-p-3'>Категория:</span>
                    <span className='text-black-c-r-p-3'>{stageOne.category}</span>
                </div>
                <div className='g-2-table'>
                    <span className='text-c-r-p-3'>Краткое наименование:</span>
                    <span className='text-black-c-r-p-3'>{stageOne.suggestion}</span>
                </div>
                <div className='g-2-table'>
                    <span className='text-c-r-p-3'>Описание</span>
                    <span className='text-black-c-r-p-3'>{stageOne.description}</span>
                </div>
            </div>
            <div className='tables-c-r-p-3'>
                <div style={{paddingRight: '1em'}}>
                    <button onClick={addCostItems} className='text-sorra'><span className='sorra'>+</span>Добавить статьи затрат</button>
                    <table className='custom-table'>
                        <thead style={{backgroundColor: '#FFFFFF'}}>
                            <tr style={{height: '3em'}}>
                                <th>№</th>
                                <th>Статьи затрат</th>
                                <th>Сумма с НДС , руб</th>
                            </tr>
                        </thead>
                        <tbody>
                        {dataCostItems.map((item, index) => {
                            let keys = Object.keys(item);
                            return(
                                <tr style={index%2 !== 0 ? {backgroundColor: '#FFFFFF', height: '3em'} : {backgroundColor: '#ffe7e7', height: '3em'}}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <input type="text"
                                               style={index%2 == 0 ? {backgroundColor: '#FFFFFF'} : {backgroundColor: '#ffe7e7'}}
                                               className='custom-input'
                                               onChange={event => changeCostItemValue(event, index, keys[1])}
                                               value={item[keys[1]]}/>

                                    </td>
                                    <td>
                                        <input type="text"
                                               style={index%2 == 0 ? {backgroundColor: '#FFFFFF'} : {backgroundColor: '#ffe7e7'}}
                                               className='custom-input'
                                               onChange={event => changeCostItemValue(event, index, keys[2])}
                                               value={item[keys[2]]}/>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <buttom onClick={addStage} className='text-sorra'><span className='sorra'>+</span>Добавить этап</buttom>
                    <table className='custom-table'>
                        <thead style={{backgroundColor: '#FFFFFF'}}>
                            <tr style={{height: '3em'}}>
                                <th>№</th>
                                <th>Название этапа</th>
                                <th>Срок,дней</th>
                            </tr>
                        </thead>
                        <tbody>
                        {dataStage.map((item, index) => {
                            let keys = Object.keys(item);
                            return(
                                <tr style={index%2 !== 0 ? {backgroundColor: '#FFFFFF', height: '3em'} : {backgroundColor: '#ffe7e7', height: '3em'}}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <input type="text"
                                               style={index%2 == 0 ? {backgroundColor: '#FFFFFF'} : {backgroundColor: '#ffe7e7'}}
                                               className='custom-input'
                                               onChange={event => changeStageValue(event, index, keys[1])}
                                               value={item[keys[1]]}/>
                                    </td>
                                    <td>
                                        <input type="text"
                                               style={index%2 == 0 ? {backgroundColor: '#FFFFFF'} : {backgroundColor: '#ffe7e7'}}
                                               className='custom-input'
                                               onChange={event => changeStageValue(event, index, keys[2])}
                                               value={item[keys[2]]}/>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    {/*<TableComponent headerList={headerStage}*/}
                    {/*                style={{backgroundColor: '#ffffff'}}*/}
                    {/*                invisibleKeysList={invisibleKeysList}*/}
                    {/*                dataList={dataStage}*/}
                    {/*                count={dataStage.length}/>*/}
                </div>
            </div>
        </div>
    )
};

export default CreateRequestPage3
