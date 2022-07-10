import APIRequest from "../utils/config/axios.config";

export  function getUser(){
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}





export  function getChuckNorrisJoke(){
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500;
        }
    });
}