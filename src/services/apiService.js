import axios from "axios";

import {baseURL} from "../configs";

const apiServices = axios.create({baseURL});

export {
    apiServices
}
