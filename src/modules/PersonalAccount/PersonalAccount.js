import React, {useState} from "react";
import {useGetDataRP, useUserData} from "../../services/personalAccount.service";
import {Button} from "@material-ui/core";
import {KeyboardArrowDown, KeyboardArrowUp, PictureAsPdf, Receipt} from "@material-ui/icons";
import "./PersonalAccount.scss"
import SignersList from "./components/SignersList/SignersList";
import {getSignersListByRequestId} from "../../services/signers.service";
import {getLinkForDownloadDocument} from "../../services/document.service";


const PersonalAccount = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [signersList, setSignersList] = useState(null);
    const {rpList, isLoading2} = useGetDataRP({id: '5'});
    const { usersList, isLoading } = useUserData({id: '5'});

    const toggleButton = (index) => {
        if (index === null) {
            setActiveIndex(null);
            setSignersList([]);
            return;
        }
        getSignersListByRequestId(rpList[index].id).then(res => {
            setSignersList(res);
            setActiveIndex(index);
        });
    }

    const startDownloadFile = (linkStr) => {
        var link = document.createElement('a');
        link.setAttribute('href',linkStr);
        link.setAttribute('download','download');
        link.click();
    };

    const getRequestLinkForDownload = (requestId, format) => {
        getLinkForDownloadDocument({requestId, format}).then(res => {
            startDownloadFile(res);
        });
    };


    const renderRequest = () => {
        return rpList.map((rp, index) => {
            return (
                <>
                    <div className='request_container white_list'>
                        <span>{rp.shortTitle}</span>
                        <div className="request_sub_container">
                            <span className="label">Тема</span>
                            <div>
                                <span>{rp.solutionDescription}</span>
                                <Button className="simple_text"
                                    color="primary"
                                    onClick={() => toggleButton(activeIndex === null ? index : null)}>
                                    На согласовании
                                    {activeIndex === index ?
                                        <KeyboardArrowUp/> :
                                        <KeyboardArrowDown/>
                                    }
                                </Button>
                            </div>
                            <div>
                                <Button onClick={() => getRequestLinkForDownload(rp.id, 'pdf')}>
                                    <PictureAsPdf/>
                                </Button>
                                <Button onClick={() => getRequestLinkForDownload(rp.id, 'docx')}>
                                    <Receipt/>
                                </Button>
                            </div>
                        </div>
                    </div>

                    { activeIndex === index &&
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 10fr'}}>
                            <div>
                                <div className='footnote'></div>
                            </div>
                            <SignersList signersList={signersList}/>
                        </div>
                    }
                </>
            );
        });
    };
    return (
        <div className='bodyes'>
            <h2 style={{textAlign: 'left', padding: '0 30px'}}>Личный кабинет</h2>

            {usersList &&
                <div className="info_container">
                    <div style={{textAlign: 'left'}}>Личная информация:</div>
                    <div>
                        <div className='info-user'>
                            <div>
                                <div>ФИО: </div>
                                <div>{usersList.name} {usersList.surname} {usersList.patronymic}</div>
                            </div>

                            <div>
                                <div>Должность: </div>
                                <div>{usersList.positionName}</div>
                            </div>

                            <div>
                                <div>Организация: </div>
                                <div>{usersList.structuralUnitsName}</div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="requests_list">
                {renderRequest()}
            </div>
        </div>
    )
}
export default PersonalAccount
