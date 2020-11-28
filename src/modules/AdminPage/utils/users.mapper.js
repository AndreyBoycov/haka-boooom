import React from "react";
import {Button, Switch} from "@material-ui/core";
import { Create } from '@material-ui/icons';

export const getFormattedUserList = (usersList, setEditUserIdCallback, statusCallback) => {
    return usersList.map((user, i) => {
        return {
            id: +user['id'],
            numberRow: i + 1,
            fullName: `${user['surname']} ${user['name']} ${user['patronymic']}`,
            organization: user['structuralUnits'],
            position: user['position'],
            rights: user['roleName'],
            active: <Switch
                        checked={!!+user.active}
                        onChange={event => statusCallback(user, i, event.target.checked)}/>,
            edit: <Button onClick={() => {setEditUserIdCallback(+user['id'])}}>
                <Create/>
            </Button>
        }
    });
};