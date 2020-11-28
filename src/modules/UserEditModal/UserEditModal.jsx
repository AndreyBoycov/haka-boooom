import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SelectComponent from "../../components/UI/Select/SelectComponent";
import classes from "./UserEditModal.module.css";

type pairType = {
    id: number;
    name: string;
};

type userInfoType = {
    firstName: string;
    secondName: string;
    surName: string;
    education: pairType;
    structuralUnits: pairType;
    position: pairType;
    role: pairType;
};

const getCopyUserInfo = (userInfo: userInfoType) => {
    const structuralUnits = {...userInfo.structuralUnits};
    const position = {...userInfo.position};
    const role = {...userInfo.role};
    const education = {...userInfo.education};
    return {...userInfo, structuralUnits, position, role, education};
}

const UserEditModal = (props) => {
    const {
        userInfo,
        onCloseModal,
        positionsList,
        structuralUnitsList,
        educationList,
        roleList,
        onUpdate,
        showMode = true
    } = props;
    const [ isShowMode, setShowMode ] = useState(showMode);
    const [ userEdit, setUserEdit ] = useState(() => getCopyUserInfo(userInfo));

    const handleOnClose = (event) => {
        setShowMode(false);
        onCloseModal({isUpdate: false});
    };

    const handleOnUpdate = (event) => {
        setShowMode(false);
        onUpdate(userEdit);
    };

    const getSelectedPosition = (selectList, selectedPosition) => {
        const selected =  selectList.find((el) => {
            return el.id === selectedPosition?.id;
        });
        return selected || {id: null, name: ''};
    }

    return (
        <Dialog
            open={isShowMode}
            onClose={handleOnClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className={classes.dialog_content}>
                        <div className={classes.fio_form}>
                            <TextField
                                id="surname"
                                label="Фамилия"
                                value={userEdit.surName}
                                onChange={event => setUserEdit({...userEdit, surName: event.target.value})}
                            />
                            <TextField
                                id="name"
                                label="Имя"
                                value={userEdit.firstName}
                                onChange={event => setUserEdit({...userEdit, firstName: event.target.value})}
                            />
                            <TextField
                                id="lastName"
                                label="Отчество"
                                value={userEdit.secondName}
                                onChange={event => setUserEdit({...userEdit, secondName: event.target.value})}
                            />
                        </div>

                        <div>
                            <SelectComponent
                                list={educationList}
                                selectedValue={getSelectedPosition(educationList, userEdit.education)}
                                label="Образование"
                                onSelect={education => setUserEdit({...userEdit, education})}/>
                        </div>

                        <div>
                            <SelectComponent
                                list={positionsList}
                                selectedValue={getSelectedPosition(positionsList, userEdit.position)}
                                label="Должность"
                                onSelect={position => setUserEdit({...userEdit, position})}/>
                        </div>

                        <div>
                            <SelectComponent
                                list={structuralUnitsList}
                                selectedValue={getSelectedPosition(structuralUnitsList, userEdit.structuralUnits)}
                                label="Подразделение"
                                onSelect={structuralUnit => setUserEdit({...userEdit, structuralUnit})}/>
                        </div>

                        <div>
                            <SelectComponent
                                list={roleList}
                                selectedValue={getSelectedPosition(roleList, userEdit.role)}
                                label="Группа прав"
                                onSelect={role => setUserEdit({...userEdit, role})}/>
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>

            <DialogActions className={classes.action_panel} style={{display: 'grid'}}>
                <Button onClick={handleOnUpdate} color="primary">
                    Сохранить
                </Button>
                <Button onClick={handleOnClose} color="primary" autoFocus>
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserEditModal;