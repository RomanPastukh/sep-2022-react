import {axiosRequest} from "../../utils/axiosConfig";
import {requestEndpoints} from "../endpoints";

 const commentsRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.comments),
    addComment: (data) => axiosRequest.post(requestEndpoints.comments, data)

}
export {commentsRequests};