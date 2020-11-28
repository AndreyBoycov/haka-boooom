import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import './CreateRequestPage2.scss';
import RequestShortInfo from "../RequestShortInfo/RequestShortInfo";

const PLACEHOLDER_DESCRIPTION_DEFECT = 'характеристика проблемы, которую решает рационализаторское предложение,\n' +
    'должна описывать недостатки действующей конструкции изделия, технологии\n' +
    'производства, применяемой техники или состава материала';
const PLACEHOLDER_DESCRIPTION_DECIDE = 'описание предлагаемого решения должно раскрывать в степени, необходимой для его\n' +
    'практического осуществления, конструкцию, технические характеристики и другие\n' +
    'существенные признаки предлагаемого к внедрению продукта. Прилагаются\n' +
    'спецификации, чертежи, рисунки, фото, руководство по монтажу и наладке,\n' +
    'руководство пользователя, дистрибутив и др. документы';
const PLACEHOLDER_POSITIVE_EFFECT = 'указывается информация об ожидаемом техническом, организационном,\n' +
    'управленческом или ином положительном эффекте от использования. Расчет\n' +
    'планируемой эффективности применения рационализаторского предложения\n' +
    'готовится согласно Приложению 10 к настоящему Положению и прикладывается к\n' +
    'заявлению';

const CreateRequestPage2 = (props) => {
    const { requestDescription } = props;
    const [ requestDescriptionStep, setRequestDescriptionStep ] = useState(requestDescription);

    return (
        <>
            <RequestShortInfo shortInfoProp={{
                category: requestDescriptionStep?.category,
                theme: requestDescriptionStep?.theme,
                shortName: requestDescriptionStep?.shortName,
                description: requestDescriptionStep?.description
            }}/>
            <div className='content_block'>
                <div>
                <span>Описание действительного положения с указанием существующих недостатков:</span>
                <TextField
                    multiline
                    placeholder={PLACEHOLDER_DESCRIPTION_DEFECT}
                    value={requestDescriptionStep.description_defect}
                    onChange={() => {}}
                    variant="outlined"
                />
            </div>

                <div>
                <span>Описание предлагаемого решения:</span>
                <TextField
                    multiline
                    placeholder={PLACEHOLDER_DESCRIPTION_DECIDE}
                    value={requestDescriptionStep.description_decide}
                    onChange={() => {}}
                    variant="outlined"
                />
            </div>

                <div>
                <span>Ожидаемый положительный эффект от использования (технический, организационный,<br/>управленческий или иной):</span>
                <TextField
                    multiline
                    placeholder={PLACEHOLDER_POSITIVE_EFFECT}
                    value={requestDescriptionStep.positive_effect}
                    onChange={() => {}}
                    variant="outlined"
                />
            </div>
            </div>
        </>
    );
};

export default CreateRequestPage2;