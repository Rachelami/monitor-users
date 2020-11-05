import axios from 'axios';

const baseUrl = 'http://13.69.54.84:9000/users';

export function getData() {
    return axios.get(`${baseUrl}`);
}

export async function postData(obj) {
    await axios.post(`${baseUrl}`, obj)
}
