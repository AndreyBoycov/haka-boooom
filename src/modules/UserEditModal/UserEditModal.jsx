import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SelectComponent from "../../components/UI/Select/SelectComponent";
import classes from "./UserEditModal.module.css";

type userInfoType = {
    firstName: string;
    secondName: string;
    surName: string;
    education: string;
    structuralUnits: {
        id: number;
        name: string;
    };
    position: {
        id: number;
        name: string;
    }
};

const getCopyUserInfo = (userInfo: userInfoType) => {
    const structuralUnits = {...userInfo.structuralUnits};
    const position = {...userInfo.position};
    return {...userInfo, structuralUnits, position};
}

const UserEditModal = (props) => {
    const {
        userInfo,
        onCloseModal,
        positionsList,
        structuralUnitsList,
        onUpdate
    } = props;
    const [ isShowMode, setShowMode ] = useState(true);
    const userEdit = getCopyUserInfo(userInfo);


    const handleOnClose = (event) => {
        setShowMode(false);
        onCloseModal(false);
    };

    const handleOnUpdate = (event) => {
        setShowMode(false);
        onUpdate(userEdit);
    };

    const setPosition = (position) => {
        userInfo.position = position;
    };

    const setStructuralUnit = (structuralUnit) => {
        userInfo.structuralUnits = structuralUnit;
    };

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
                            <TextField id="surname" label="Фамилия" value={userEdit.surName}/>
                            <TextField id="name" label="Имя" value={userEdit.firstName}/>
                            <TextField id="lastName" label="Отчество" value={userEdit.secondName}/>
                        </div>

                        <div>
                            <TextField id="education" label="Образование" value={userEdit.education}/>
                        </div>

                        <div>
                            <SelectComponent list={positionsList} label="Должность" onSelect={setPosition}/>
                        </div>

                        <div>
                            <SelectComponent list={structuralUnitsList} label="Подразделение" onSelect={setStructuralUnit}/>
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
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