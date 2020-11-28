import React, {Component} from "react";
import "./PersonalAccount.scss"
import {useGetDataRP, useUserData} from "../../services/personalAccount.service";
import ApplicationRoot from "../../components/AplicationRoot/ApplicationRoot";


const PersonalAccount = (props) => {

    const { usersList, isLoading } = useUserData({id: '5'});
    const { rpList, isLoading2 } = useGetDataRP({id: '5'});

    const state = {
        name: usersList['name'],
        surname: usersList['surname'],
        patronymic: usersList['patronymic'],
        id: usersList['id'],
        name_role: usersList['name_role'],
        offers: rpList,
        confirmations: ['подтверждение а', 'подтверждение б']
    };
    console.log(rpList, 'kek');

    // render() {
        return (
            <div style={{backgroundColor: '#D7D7D7'}} className='bodyes'>
                <div style={{padding: '1em 0 0 0'}}>
                    <div>Личная информация:</div>
                    <div>
                        <div className='info-user'>
                            <span>ФИО: </span>
                            <span>{state.name} {state.surname} {state.patronymic}</span>
                            <span>Должность:</span>
                            <span>{state.name_role}</span>
                        </div>
                    </div>
                    <div className='rac-predloj'>
                        <div className='header'>Список ваших рац. предложений: </div>
                        <div className='body'>
                            {state.offers.map(offer => {
                                debugger;
                                let a = state.surname.slice(0, 1);
                                let b = state.patronymic.slice(0, 1);
                                offer['author'] = state.name + state.surname[0] + '. ' + state.patronymic[0];
                                offer['views'] = '50';
                                offer['reader'] = '52';
                                offer['dateLastChange'] = '02.08.2020';
                                return (
                                    ApplicationRoot(offer)
                                )
                            })}
                        </div>
                    </div>
                    <div className='rac-predloj'>
                        <div className='header'>Список рац. предложений в которых вы участвуете: </div>
                        <div className='body'>
                            {state.confirmations.map(confirmation => {
                                return (
                                    <div>
                                        {confirmation}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    // }
}
export default PersonalAccount
