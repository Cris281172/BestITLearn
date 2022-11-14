const BASE_URL = 'http://localhost:8080'



const callToAPI = async (url: string, method:string = 'get', body: object = {}) => {
    const response = await fetch(BASE_URL + url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log(data);
    return await data;
}

export default callToAPI;


