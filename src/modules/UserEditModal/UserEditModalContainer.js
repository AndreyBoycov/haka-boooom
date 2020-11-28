import React, {useState} from "react";
import {
    updateUserInfo,
    useGetEducationList,
    useGetRolesList,
    useGetStructuralUnitsList,
    useGetUserPositionList,
    useUsersInfoById
} from "../../services/user.service";
import UserEditModal from "./UserEditModal";

const getFormattedUserInfo = (userInfo) => {
    return {
        id: +userInfo.id,
        firstName: userInfo.name,
        secondName: userInfo.patronymic,
        surName: userInfo.surname,
        education: {
            id: userInfo.education,
            name: userInfo.educationName,
        },
        structuralUnits: {
            id: userInfo.structuralUnits,
            name: userInfo.structuralUnitsName,
        },
        position: {
            id: userInfo.position,
            name: userInfo.positionName,
        },
        role: {
            id: userInfo.roleId,
            name: userInfo.roleName,
        }
    }
};


const UserEditModalContainer = (props) => {
    const { userId, onCloseEditUser } = props;
    const [ showMode, setShowMode ] = useState(true);
    const { userInfo, isLoading: isLoadingUserInfo } = useUsersInfoById(userId);
    const { positions, isLoading: isLoadingPositions } = useGetUserPositionList();
    const { roles, isLoading: isLoadingRoles } = useGetRolesList();
    const { educations, isLoading: isLoadingEducations } = useGetEducationList();
    const {
        structuralUnits,
        isLoading: isLoadingStructuralUnits
    } = useGetStructuralUnitsList();

    const handlerUpdateUser = (userInfo) => {
        const userData = {
            name: userInfo.firstName,
            patronymic: userInfo.secondName,
            surname: userInfo.surName,
            position: userInfo.position?.id,
            structuralUnits: userInfo.structuralUnits?.id,
            education: userInfo.education?.id,
            id: userInfo.id,
            id_role: userInfo.role?.id,
        };
        const updatedId = updateUserInfo(userData);
        onCloseEditUser({isUpdate: true})
    }

    return (
        <>
        {userInfo && positions.length && structuralUnits.length && educations.length && roles.length &&
            <UserEditModal
                userInfo={getFormattedUserInfo(userInfo)}
                onCloseModal={onCloseEditUser}
                positionsList={positions}
                structuralUnitsList={structuralUnits}
                educationList={educations}
                roleList={roles}
                showMode={showMode}
                onUpdate={handlerUpdateUser}
            />
        }
        </>
    );
};

export default UserEditModalContainer;