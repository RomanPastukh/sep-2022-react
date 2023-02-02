import {axiosRequest} from "../../utils/axiosConfig";
import {requestEndpoints} from "../endpoints";


 const usersRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.users),
    createUsers: (data) => axiosRequest.post(requestEndpoints.users, data)

};
 export {usersRequests};
