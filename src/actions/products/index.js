import {AUTOCOMPLETE, GET, LIST} from './types'
export const getAllProducts = (products)=> {
    return {
        type: LIST,
        products
    }
}
export const getAutocomplete = (autocomplete)=> {
    return {
        type: AUTOCOMPLETE,
        autocomplete
    }
}
export const getProduct = (_id)=> {
    return {
        type: GET,
        _id
    }
}/*
export const findByProduct = (id)=> {
    return dispatch => {
        dispatch(request())

        return axiosInstance.get('product/detail/' + id)
            .then(response => dispatch(received(response.data)))
            .catch(error=>console.log(error))
    }
}*/