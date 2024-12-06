const baseURLAPI = (url = '') => {
    url     = url.replace(/^[/]/g,'');
    const baseURL   = 'http://localhost:3000/api/v1/broide/';
    return baseURL + url;
}

export default baseURLAPI