import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../../pages/endpoints";

export const postsRequest = {
    getPostById: (id) => axiosRequest.get(requestsLinks.postById(id))
}