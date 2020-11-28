export const mapSelectOptions = (dataList, objectMap) => {
    return dataList.map(row => {
        debugger;
        const newRow = {};
        for (const objectMapKey in objectMap) {
            const oldKey = objectMap[objectMapKey];
            newRow[objectMapKey] = row[oldKey];
        }
        return {...row, ...newRow};
    })
};