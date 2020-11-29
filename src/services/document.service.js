import http from "../modules/common/HttpAdapter";

export const getLinkForDownloadDocument = async ({requestId, format}) => {
    const { response } = await http({
        url: `/other/createDocument/${requestId}`,
        method: 'POST',
        data: {format}
    });

    return response;
};