import {useFetch} from "../modules/common/useFetch";

export const useUserData = (data = {}) => {
    const response = useFetch(`/userLk/getUserInfo/${data.id}`);

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
