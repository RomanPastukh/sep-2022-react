import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../../pages/endpoints";

export const commentsRequest = {
    getAll: () => axiosRequest.get(requestsLinks.comments),

}