import {useFetch} from "../modules/common/useFetch";

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