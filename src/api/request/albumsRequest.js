import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../../pages/endpoints";

export const albumsRequest = {
    getAll: () => axiosRequest.get(requestsLinks.albums),

}