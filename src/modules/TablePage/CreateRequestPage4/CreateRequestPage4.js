import React from "react";
import './CreateRequestPage4.scss';

const CreateRequestPage4 = (props) => {
    const {onChangeTables, stageOne} = props;

    const [dataCostItems, setDataCostItems] = React.useState(props.stageFour);

    const addUser = () => {
        setDataCostItems(dataCostItems.push({userID: '', percent: ''}))
    };

    const changePercentValue = () => {

    }

    return(
        <div>
            <div className='theme-grid-table' style={{gridGap: '1em'}}>
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
            <div style={{paddingRight: '1em', display: 'grid'}}>
                <button onClick={addUser} className='text-sorra'><span className='sorra'>+</span>Добавить автора</button>
                <table className='custom-table' style={{width: '50em'}}>
                    <thead style={{backgroundColor: '#FFFFFF'}}>
                    <tr style={{height: '3em'}}>
                        <th>№</th>
                        <th>Статьи затрат</th>
                        <th>Сумма с НДС , руб</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dataCostItems.map((item, index) => {
                        return(
                            <tr style={index%2 !== 0 ? {backgroundColor: '#FFFFFF', height: '3em'} : {backgroundColor: '#ffe7e7', height: '3em'}}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <input type="text"
                                           style={index%2 == 0 ? {backgroundColor: '#FFFFFF'} : {backgroundColor: '#ffe7e7'}}
                                           className='custom-input'
                                           // onChange={event => changeUserValue(event, index)}
                                           value={item.user}/>

                                </td>
                                <td>
                                    <input type="text"
                                           style={index%2 == 0 ? {backgroundColor: '#FFFFFF'} : {backgroundColor: '#ffe7e7'}}
                                           className='custom-input'
                                           onChange={event => changePercentValue(event, index)}
                                           value={item.percent}/>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CreateRequestPage4
