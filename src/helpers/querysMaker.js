export default function (querys) {
    let querysString = '';
    Object.entries(querys).map(([key, value]) => {
        value === '' ? false : querysString += `&${key}=${String(value)}`
    })
    return querysString;
}