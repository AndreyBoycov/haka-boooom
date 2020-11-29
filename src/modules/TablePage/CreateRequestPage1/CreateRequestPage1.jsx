import React from "react";
import Button from "@material-ui/core/Button";
import ApplicationRoot from "../../../components/AplicationRoot/ApplicationRoot";
import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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

const CreateRequestPage1 = (props) => {
    const {changeStageOne} = props;

    const [category, setCategory] = React.useState(props.props.category);
    const [description, setDescription] = React.useState(props.props.description);
    const [suggestion, setSuggestion] = React.useState(props.props.suggestion);

    const changeCategory = (event) => { setCategory(event.target.value); changeStageOne({category, description, suggestion})};
    const changeSuggestion = (event) => { setSuggestion(event.target.value); changeStageOne({category, description, suggestion}) };
    const changeDescription = (event) => { setDescription(event.target.value); changeStageOne({category, description, suggestion}) };

    return (
        <div>
            <div className='fields'>
                <span>Категория</span>
                <select value={category} onChange={event => changeCategory(event)}>
                    <option value='Электрика'>Электрика</option>
                    <option value='Строительстфо'>Строительстфо</option>
                    <option value='Фрезеровка'>Фрезеровка</option>
                    <option value='Качество сна'>Качество сна</option>
                </select>
                <span>Предложение</span>
                <input type="text"
                       value={suggestion}
                       onChange={event => changeSuggestion(event)}
                />
                <span>Описание</span>
                <textarea value={description}
                          onChange={event => changeDescription(event)}>

                </textarea>
            </div>
            <div className='has-theme'>
                {hasTheme.map(item => {
                    return (
                        ApplicationRoot(item)
                    )
                })}
            </div>
        </div>
    );
};

export default CreateRequestPage1;
