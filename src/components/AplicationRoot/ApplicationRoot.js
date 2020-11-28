import subtract from "../../images/iconGlas.svg";
import icon from "../../images/icon.svg";
import React from "react";
import './ApplicationRoot.scss'

const ApplicationRoot = props => {
    return(
        <div className='has-result'>
            <div className='description-result'>
                <span className='result-header'>{props.shortTitle}</span>
                <span className='theme-table-page'>Тема</span>
                <div className='description-table-page'>
                    {props.solutionDescription}
                </div>
                <div>
                    <span className='header-text-table-page'>Автор</span>
                    <span className='author-table-page'>
                                                {props.author}
                                            </span>
                </div>
                <div className='dates-grid-table'>
                    <span className='header-text-table-page'>Дата размещения</span>
                    <span className='dates-table-page'>
                                                {props.date}
                                            </span>
                    <span className='header-text-table-page'>Дата последнего изменения</span>
                    <span className='dates-table-page'>
                                                {props.dateLastChange}
                                            </span>
                </div>
            </div>
            <div style={{display: 'grid', gridTemplateRows: '2rem 2rem auto'}}>
                <div className='icons-table-page'>
                                            <span>
                                                {props.views}
                                            </span>
                    <img src={subtract} alt=""/>
                </div>
                <div className='icons-table-page'>
                                            <span>
                                                {props.reader}
                                            </span>
                    <img src={icon} alt=""/>
                </div>
                <div style={{alignSelf: 'end', paddingBottom: '20px'}}>
                    <a className='href-result-table-page' href="">Перейти</a>
                </div>
            </div>
        </div>
    )
}
export default ApplicationRoot
