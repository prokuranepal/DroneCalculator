export const updateObject = (oldObject, updatedProperties) => {
    const data =  {
        ...oldObject,
        ...updatedProperties
    }
    // console.log(data);
    return data;
};