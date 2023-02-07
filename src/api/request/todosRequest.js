import {axiosRequest} from "../../utils/axiosConfig";
import {requestsLinks} from "../../pages/endpoints";

export const todosRequest ={

    getAll:() =>axiosRequest.get(requestsLinks.todos)
}