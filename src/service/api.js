import axios from "axios"

let baseUrl='http://127.0.0.1:8000/api/'

export async function signupapi(data){
    return await axios.post(baseUrl+'register/',data)
}

export async function signinapi(data){

    return await axios.post(baseUrl+'token/',data)
}
export async function taskcreateapi(data){
    let token=localStorage.getItem('token')
    let headers={
        'Authorization':token
    }
    return await axios.post(baseUrl+'tasks/',data,{headers})
}

export async function tasklistapi(){
    let token=localStorage.getItem('token')

    let headers={
        "Authorization":token
    }
    return await axios.get(baseUrl+'tasks/',{headers})
}
export async function taskdeleteapi(id){
    let token=localStorage.getItem('token')
    let headers={
        'Authorization':token

    }
    return await axios.delete(baseUrl+`tasks/${id}/`,{headers})
}
export async function taskupdateapi(id){

    let token=localStorage.getItem('token')
    let headers={
        'Authorization':token
    }
    return await axios.put(baseUrl+`tasks/${id}/`,{headers})
}