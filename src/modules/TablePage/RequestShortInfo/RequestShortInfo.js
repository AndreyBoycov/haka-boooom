import React, {useState} from "react";
import './RequestShortInfo.scss'

const RequestShortInfo = (props) => {
    const {shortInfoProp} = props;
    const [shortInfo, setShortInfo] = useState(shortInfoProp);

    return (
        <div className="short_info_block">
                <span className="green_text">Категория</span>
                <span>{shortInfoProp.category}</span>

                <span className="green_text">Краткое наименование:</span>
                <span>{shortInfoProp.suggestion}</span>

                <span className="green_text">Описание</span>
                <span>{shortInfoProp.description}</span>
        </div>
    );
};

export default RequestShortInfo;
