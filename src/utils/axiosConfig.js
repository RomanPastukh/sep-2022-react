import axios from "axios";

import {baseURL} from "../pages/endpoints";


export const axiosRequest = axios.create({baseURL})