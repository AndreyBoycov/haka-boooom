import React, {Component} from "react";
import "./PersonalAccount.scss"
import {useUserData} from "../../services/personalAccount.service";


const PersonalAccount = (props) => {

    const { usersList, isLoading } = useUserData({id: '1'});

    const state = {
        name: usersList['name'],
        surname: usersList['surname'],
        patronymic: usersList['patronymic'],
        id: usersList['id'],
        name_role: usersList['name_role'],
        offers: ['запупка новых фрезерных станков', 'система поощрений'],
        confirmations: ['подтверждение а', 'подтверждение б']
    };
    console.log(usersList, 'kek')

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
                                return (
                                    <div>
                                        {offer}
                                    </div>
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
