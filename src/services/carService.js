import {apiServices} from "./apiService";
import {urls} from "../configs";

const carService = {
    getAll:()=>apiServices.get(urls.cars.cars),
    create:(data)=>apiServices.post(urls.cars.cars, data),
    updateById:(id, data)=> apiServices.put(urls.cars.buId(id), data),
    deleteById: (id)=> apiServices.delete(urls.cars.buId(id))


}

export {
    carService
}