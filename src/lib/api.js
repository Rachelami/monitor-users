import axios from "axios";

const baseUrl = 'http://13.69.54.84:9000/users';


export function getData() {
    return axios.get(`${baseUrl}`);
}

export function deleteData() {
    axios.delete(`${baseUrl}`)
        .then(response => {
            console.log(response);
        })
}
export function updateData(objToUpdate) {
    axios.put(`${baseUrl}`, objToUpdate)
        .then(response => {
            console.log(response);
        })
}


//remove the response
export async function postData(obj) {
    await axios
        .post(`${baseUrl}`, obj)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}
