import React from "react";
import TableComponent from "../../components/UI/Table/TableComponent";

const AdminPage = (props) => {

    const headerList = {
        number: 'Номер',
        fullName: 'ФИО пользователя',
        organization: 'Организация',
        position: 'Должность',
        rights: 'Права',
        active: 'Активность',
    };

    const dataList = [
        {
            number: '1',
            fullName: '1',
            organization: '1',
            position: '1',
            rights: '1',
            active: '1'
        },
        {
            number: '2',
            fullName: '2',
            organization: '2',
            position: '2',
            rights: '2',
            active: '2'
        }
    ];

    return (
        <TableComponent headerList={headerList} dataList={dataList}/>
    );
};

export default AdminPage;