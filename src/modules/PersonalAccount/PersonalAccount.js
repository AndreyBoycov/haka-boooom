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
        name_role: usersList['positionName'],
        offers: rpList,
        confirmations: rpList
    };
    console.log(rpList, 'kek');

    // render() {
        return (
            <div style={{backgroundColor: '#D7D7D7'}} className='bodyes'>
                <div style={{padding: '1em 0 0 0'}}>
                    <div>Личная информация:</div>
                    <div>
                        <div className='info-user'>
                            <span style={{color: '#007ace'}}>ФИО: </span>
                            <span style={{background: 'linear-gradient(45deg, #ffae78, #d7d7d7)',
                                          borderRadius: '15px',
                                          paddingLeft: '5px'}}>
                                {state.name} {state.surname} {state.patronymic}
                            </span>
                            <span style={{color: '#007ace'}}>Должность:</span>
                            <span style={{background: 'linear-gradient(45deg, #ffae78, #d7d7d7)',
                                          borderRadius: '15px',
                                          paddingLeft: '5px'}}>
                                {state.name_role}
                            </span>
                        </div>
                    </div>
                    <div className='rac-predloj'>
                        <div style={{display: 'grid', justifyItems: 'baseline',
                                     borderBottomLeftRadius: '5px',
                                     borderTopLeftRadius: '5px',
                                     backgroundColor: 'rgba(0,0,0,0.12)',
                                     padding: '5px'}}>
                            <span className='header'>Список ваших рац. предложений: </span>
                            <div className='body'>
                                {state.offers.map(offer => {
                                    offer['author'] = state.name + ' ' + state.surname[0] + '. ' + state.patronymic[0];
                                    offer['views'] = '50';
                                    offer['reader'] = '52';
                                    offer['dateLastChange'] = '02.08.2020';
                                    return (
                                        ApplicationRoot(offer)
                                    )
                                })}
                            </div>
                        </div>
                        <div style={{display: 'grid', justifyItems: 'baseline',
                                     backgroundColor: '#919eab',
                                     padding: '5px'}}>
                            <span className='header'>Список рац. предложений в которых вы участвуете: </span>
                            <div className='body'>
                                {state.confirmations.map(confirmation => {
                                    confirmation['author'] = state.name + ' ' + state.surname[0] + '. ' + state.patronymic[0];
                                    confirmation['views'] = '50';
                                    confirmation['reader'] = '52';
                                    confirmation['dateLastChange'] = '02.08.2020';
                                    return (
                                        ApplicationRoot(confirmation)
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='rac-predloj'>
                    </div>
                </div>
            </div>
        )
    // }
}
export default PersonalAccount
