import http from "../modules/common/HttpAdapter";

export const getFirstExpertByRequestId = async (requestId) => {
    const { response } = await http({
        url: `/other/getFirstExpert/${requestId}`,
        method: 'GET'
    });

    return response;
};

export const getSecondExpertByRequestId = async (requestId) => {
    const { response } = await http({
        url: `/other/getSecondExpert/${requestId}`,
        method: 'GET'
    });

    return response;
};

export const getSuperExpertByRequestId = async (requestId) => {
    const { response } = await http({
        url: `/other/getSuperExpert/${requestId}`,
        method: 'GET'
    });

    return response;
};

export const getImplementorByRequestId = async (requestId) => {
    const { response } = await http({
        url: `/other/getImplementor/${requestId}`,
        method: 'GET'
    });


    return response;
};

export const getSignersListByRequestId = (requestId) => {
    const requests = [
        getFirstExpertByRequestId(requestId),
        getSecondExpertByRequestId(requestId),
        getSuperExpertByRequestId(requestId),
        getImplementorByRequestId(requestId)
    ];
    return  Promise.all(requests);
};