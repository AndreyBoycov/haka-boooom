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