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
export const useGetDataRP = (data = {}) => {
    const response = useFetch(`/application/getUserApplications/${data.id}`);

    if (!response.data || response.data.error) {
        return {
            rpList: [],
            isLoading2: response.isLoading2,
        };
    }

    return {
        rpList: response.data,
        isLoading2: response.isLoading2,
    };
};
