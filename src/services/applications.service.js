import http from "../modules/common/HttpAdapter";

export const addApplication = async (userInfo, dataSave) => {
    console.log(userInfo, dataSave);
    const { response } = await http({
        url: `/application/addApplication`,
        method: 'POST',
        data: {...dataSave}
        // data: JSON.stringify(dataSave)
    });
    return response;
};
