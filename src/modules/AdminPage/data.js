export const headerList = {
    number: 'Номер',
    fullName: 'ФИО пользователя',
    organization: 'Организация',
    position: 'Должность',
    rights: 'Права',
    active: 'Активность',
};

export const getData = () => {
    const data = [];
    for (let i = 1; i < 1000; i++) {
        data.push(
            {
                number: i,
                fullName: i,
                organization: i,
                position: i,
                rights: i,
                active: i
            }
        );
    }
    return data;
};