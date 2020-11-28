import React, {Component} from 'react'
import './TablePage.scss'
import icon from '../../images/icon.svg'
import subtract from '../../images/iconGlas.svg'
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const hasTheme = [
    {theme: 'эксплуатация распределительных сетей',
     description: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     dateStart: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {theme: 'эксплуатация распределительных сетей',
     description: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     dateStart: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {theme: 'эксплуатация распределительных сетей',
     description: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     dateStart: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {theme: 'эксплуатация распределительных сетей',
     description: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     dateStart: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {theme: 'эксплуатация распределительных сетей',
     description: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     dateStart: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
    {theme: 'эксплуатация распределительных сетей',
     description: 'Должна обеспечиваться возможность поиска тем по основным атрибутам. Внутри тематического направления выводится список вопросов с возможностью сортировки созданных тем по основным атрибутам (Ф.И.О. автора, дата размещения, последнее',
     author: 'Константинопольский В. А.',
     dateStart: '02.08.2020',
     dateLastChange: '02.08.2020',
     views: '50',
     reader: '52'},
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
                        <div className='stage'>1 этап</div>
                        <div className='line'></div>
                        <div className='stage'>2 этап</div>
                        <div className='line'></div>
                        <div className='stage'>3 этап</div>
                        <div className='line'></div>
                        <div className='stage'>4 этап</div>
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
                            <div className='has-result'>
                                <div className='description-result'>
                                    <span className='result-header'>{item.theme}</span>
                                    <span className='theme-table-page'>Тема</span>
                                    <div className='description-table-page'>
                                        {item.description}
                                    </div>
                                    <div>
                                        <span className='header-text-table-page'>Автор</span>
                                        <span className='author-table-page'>
                                            {item.author}
                                        </span>
                                    </div>
                                    <div className='dates-grid-table'>
                                        <span className='header-text-table-page'>Дата размещения</span>
                                        <span className='dates-table-page'>
                                            {item.dateStart}
                                        </span>
                                        <span className='header-text-table-page'>Дата последнего изменения</span>
                                        <span className='dates-table-page'>
                                            {item.dateLastChange}
                                        </span>
                                    </div>
                                </div>
                                <div style={{display: 'grid', gridTemplateRows: '2rem 2rem auto'}}>
                                    <div className='icons-table-page'>
                                        <span>
                                            {item.views}
                                        </span>
                                        <img src={subtract} alt=";jgf"/>
                                    </div>
                                    <div className='icons-table-page'>
                                        <span>
                                            {item.reader}
                                        </span>
                                        <img src={icon} alt=""/>
                                    </div>
                                    <div style={{alignSelf: 'end', paddingBottom: '20px'}}>
                                        <a className='href-result-table-page' href="">Перейти</a>
                                    </div>
                                </div>
                            </div>
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
