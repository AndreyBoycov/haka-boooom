import React from "react";
import {useGetStructuralUnitsList, useGetUserPositionList, useUsersInfoById} from "../../services/user.service";
import UserEditModal from "./UserEditModal";
import {mapSelectOptions} from "../../components/UI/Select/utils/select-option.mapper";

const UserEditModalContainer = (props) => {
    const { userId, onCloseEditUser } = props;
    const { userInfo, isLoading: isLoadingUserInfo } = useUsersInfoById(userId);
    const { positions, isLoading: isLoadingPositions } = useGetUserPositionList();
    const {
        structuralUnits,
        isLoading: isLoadingStructuralUnits
    } = useGetStructuralUnitsList();

    const getFormattedPositions = (list) => {
        return list.map(row => ({
            ...row,
            name: row.position
        }));
    };

    const getFormattedStructuralUnits = (list) => {
        return list.map(row => ({
            ...row,
            name: row.position
        }));
    };

    return (
        <UserEditModal
            userInfo={userInfo}
            onCloseModal={onCloseEditUser}
            positionsList={getFormattedPositions(positions)}
            structuralUnitsList={getFormattedStructuralUnits(structuralUnits)}
            onUpdate
        />
    );
};

export default UserEditModalContainer;