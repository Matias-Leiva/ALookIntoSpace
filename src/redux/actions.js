import * as types from "./types";
import nasaApi from '../api/api'
import querysMaker from "../helpers/querysMaker";

export const getRoversImages = () => {
    return async (dispatch, getState) => {
        dispatch(setLoading());
        try {
            const {rover, querys} = getState().rovers;
            const querysEndpoint = querysMaker(querys);
            const roverImages = await nasaApi.getRoversImages(rover, querysEndpoint)
            dispatch(setImages(roverImages.data.photos));
        } catch (error) {
            dispatch(setError(error.message))
        }
    }
}

const setLoading = payload => ({type: types.SET_LOADING, payload})
const setError = payload => ({type: types.SET_ERROR, payload})
const setImages = payload => ({type: types.SET_IMAGES, payload})

export const setRover = payload => ({type: types.SET_LOADING, payload})
export const setPage = payload => ({type: types.SET_PAGE, payload})
export const setQuerys = payload => ({type: types.SET_QUERYS, payload})
