
export const getApi = (url) => () => fetch(url).then(v => v.json());

export const putApi = (url, id, obj) => () => 
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json'})
    }).then(v => v.json())
    .then(r => {
        if(r.error){
            return Promise.reject(r.validation)
        }
        return r;
    }).catch(e => {
        return Promise.reject(e);
    });

export const postApi = (url, obj) => () => 
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json'})
    }).then(v => v.json())
    .then(r => {
        if(r.error){
            return Promise.reject(r.validation)
        }
        return r;
    }).catch(e => {
        return Promise.reject(e);
    });

export const deleteApi = (url, id) => () => 
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json'})
    }).then(v => v.json())
    .then(r => {
        if(r.error){
            return Promise.reject(r.validation)
        }
        return id;
    }).catch(e => {
        return Promise.reject(e);
    });