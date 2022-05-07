export default function (querys) {
    const querysString = '';
    Object.entries(querys).map(([key, value]) => {
            querysString += `&${key}=${value}`
    })
    return querysString;
}