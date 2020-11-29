import React from "react";
import './SignersList.scss';
import moment from "moment";

const getRusFormatDate = (dateStr) => {
    return moment(dateStr).format('DD.MM.YYYY')
}

const SignersList = (props) => {
    const { signersList } = props;

    return (
        <div className="signers_list">
            {
                signersList.map((signer, index) => (
                    <div className="signer white_list">
                        <div>{ index + 1 }</div>
                        <div>{ `${signer.surname} ${signer.name} ${signer.patronymic}` }</div>
                        <div>{ signer.status }</div>
                        <div>{ getRusFormatDate(signer.date_upd) }</div>
                        <hr/>
                    </div>
                ))
            }
        </div>
    );
};

export default SignersList;