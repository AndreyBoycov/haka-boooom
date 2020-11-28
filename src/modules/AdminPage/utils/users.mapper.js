import React from "react";
import {Button} from "@material-ui/core";

export const getFormattedUserList = (usersList, setEditUserIdCallback) => {
    return usersList.map((user, i) => {
        return {
            id: +user['id'],
            numberRow: i,
            fullName: `${user['surname']} ${user['name']} ${user['patronymic']}`,
            organization: user['structuralUnits'],
            position: user['position'],
            rights: user['roleName'],
            active: '+',
            edit: <Button onClick={() => {setEditUserIdCallback(+user['id'])}}>Редактировать</Button>
        }
    });
};