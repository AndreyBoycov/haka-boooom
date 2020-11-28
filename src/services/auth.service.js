import http from "../modules/common/HttpAdapter";

export const login = async ({ email, pass }) => {
    const { response } = await http({
        url: '/autorization/login',
        method: 'POST',
        data: {email, pass}
    });
    localStorage.setItem('user', JSON.stringify(response));

    return response;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const isAuthorized = () => {
    const user = getUserFromLocalStorage();
    return !!user;
};