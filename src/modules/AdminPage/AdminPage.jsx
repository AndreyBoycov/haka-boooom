import React, {useEffect, useState} from "react";
import TableComponent from "../../components/UI/Table/TableComponent";
import {deactivateUser, getUsersList, useUsersList} from "../../services/user.service";
import {getFormattedUserList} from "./utils/users.mapper";
import UserEditModalContainer from "../UserEditModal/UserEditModalContainer";

const headerList = {
    numberRow: 'Номер',
    fullName: 'ФИО пользователя',
    organization: 'Организация',
    position: 'Должность',
    rights: 'Права',
    active: 'Активность',
    edit: 'Редактировать'
};

const invisibleKeysList = ['id'];

const AdminPage = (props) => {
    const [ userIdEdit, setUserIdEdit ] = useState(null);
    const [ usersList, setUsersList ] = useState( []);

    useEffect(() => {
        getUsersList({}).then(users => {
            setUsersList(users)
        });
    }, [])


    const activeUserEditModal = (userId) => {
        setUserIdEdit(userId);
    }

    const handlerCloseEditUser = () => {
        setUserIdEdit(null);
        getUsersList({}).then(users => {
            setUsersList(users)
        });
    };

    const activateUserCallback = (row, indexRow, status) => {
        deactivateUser(+row.id, status)
            .then(res => {
                return getUsersList({});
            })
            .then(users => setUsersList(users));
    }

    return (
        <>
            {userIdEdit && <UserEditModalContainer
                userId={userIdEdit}
                onCloseEditUser={handlerCloseEditUser}
            />}
            <TableComponent
                headerList={headerList}
                invisibleKeysList={invisibleKeysList}
                dataList={getFormattedUserList(usersList, activeUserEditModal, activateUserCallback)}
                count={usersList.length}
            />
        </>
    );
};

export default AdminPage;