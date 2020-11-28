import React, {useState} from "react";
import TableComponent from "../../components/UI/Table/TableComponent";
import {useUsersList} from "../../services/user.service";
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
    const { usersList, isLoading } = useUsersList({});

    const activeUserEditModal = (userId) => {
        setUserIdEdit(userId);
    }

    const handlerCloseEditUser = () => {
        setUserIdEdit(null);
    };

    return (
        <>
            {userIdEdit && <UserEditModalContainer
                userId={userIdEdit}
                onCloseEditUser={handlerCloseEditUser}
            />}
            <TableComponent
                headerList={headerList}
                invisibleKeysList={invisibleKeysList}
                dataList={getFormattedUserList(usersList, activeUserEditModal)}
                count={usersList.length}
            />
        </>
    );
};

export default AdminPage;