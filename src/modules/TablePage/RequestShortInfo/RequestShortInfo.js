import React, {useState} from "react";
import './RequestShortInfo.scss'

const RequestShortInfo = (props) => {
    const {shortInfoProp} = props;
    const [shortInfo, setShortInfo] = useState(shortInfoProp);

    return (
        <div className="short_info_block">
            <div>
                <span className="green_text">Категория</span>
                <span>{shortInfo.category?.name}</span>
            </div>

            <div>
                <span className="green_text">Тема:</span>
                <span>{shortInfo.theme}</span>
            </div>

            <div>
                <span className="green_text">Краткое наименование:</span>
                <span>{shortInfo.shortName}</span>
            </div>

            <div>
                <span className="green_text">Описание</span>
                <span>{shortInfo.description}</span>
            </div>
        </div>
    );
};

export default RequestShortInfo;