const API_URL = "http://127.0.0.1:8000/api/user/";

export const usernew  = async () =>{
    return await fetch(API_URL);
};