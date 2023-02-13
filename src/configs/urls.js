const baseURL='http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars: {
        cars,
        buId:(id)=>`${cars}/${id}`
    }
}
export {
    baseURL,
    urls
}