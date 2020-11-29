import {useFetch} from "../modules/common/useFetch";
import http from "../modules/common/HttpAdapter";

export const useUsersList = (data = {}) => {
    const response = useFetch('/userLk/getUsersList');

    if (!response.data || response.data.error) {
        return {
            usersList: [],
            isLoading: response.isLoading,
        };
    }

    return {
        usersList: response.data,
        isLoading: response.isLoading,
    };
};

export const getUsersList = async ({}) => {
    const { response } = await http({
        url: `/userLk/getUsersList`,
        method: 'GET'
    });

    return response;
}

export const useUsersInfoById = (userId) => {
    const response = useFetch(`/userLk/getUserInfo/${userId}`);

    if (!response.data || response.error) {
        return {
            userInfo: {},
            isLoading: response.isLoading,
        };
    }

    return {
        userInfo: response.data,
        isLoading: response.isLoading,
    };
};

export const useGetUserPositionList = () => {
    const response = useFetch(`/userLk/getPositionsList`);

    if (!response.data || response.error) {
        return {
            positions: [],
            isLoading: response.isLoading,
        };
    }

    return {
        positions: response.data,
        isLoading: response.isLoading,
    };
};

export const useGetStructuralUnitsList = () => {
    const response = useFetch(`/userLk/getStructuralUnitsList`);

    if (!response.data || response.error) {
        return {
            structuralUnits: [],
            isLoading: response.isLoading,
        };
    }

    return {
        structuralUnits: response.data,
        isLoading: response.isLoading,
    };
};

export const useGetRolesList = () => {
    const response = useFetch(`/userLk/getRoleList`);

    if (!response.data || response.error) {
        return {
            roles: [],
            isLoading: response.isLoading,
        };
    }

    return {
        roles: response.data,
        isLoading: response.isLoading,
    };
};

export const useGetEducationList = () => {
    const response = useFetch(`/userLk/getEducationList`);

    if (!response.data || response.error) {
        return {
            educations: [],
            isLoading: response.isLoading,
        };
    }

    return {
        educations: response.data,
        isLoading: response.isLoading,
    };
};

export const updateUserInfo = async (userInfo) => {
    const { response } = await http({
        url: `/userLk/updUserInfo/${userInfo.id}`,
        method: 'POST',
        data: {user: JSON.stringify(userInfo)}
    });
    return response;
};

export const deactivateUser = async (userId, status) => {
    const { response } = await http({
        url: `/userLk/changeUserStatus/${userId}`,
        method: 'POST',
        data: {change: +status}
    });
    return response;
};