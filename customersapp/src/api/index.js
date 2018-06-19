
export const getApi = (url) => () => fetch(url).then(v => v.json());