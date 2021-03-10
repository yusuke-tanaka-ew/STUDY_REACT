import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';


const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking'
const APP_ID = 'dj00aiZpPVV2T1YzWURsOXM4NiZzPWNvbnN1bWVyc2VjcmV0Jng9NWM-'

const startRequest = categoryId => ({
    type : 'START_REQUEST',
    payload : {categoryId}
})

const recieveData = (categoryId,error,response) => ({
    type : 'RECEIVE_DATA',
    payload : {categoryId,error,response}
})

const finishRequest = categoryId => ({
    type: 'FINISH_REQUEST',
    payload : {categoryId}
})


export const fetchRanking = categoryId => {
    return async dispatch => {
        dispatch(startRequest(categoryId))
        const queryString = qs.stringify({
            appid :APP_ID,
            category_id : categoryId
        })
    

        try {
            const response = await fetchJsonp(`${API_URL}?${queryString}`)
            const data = await response.json()

            dispatch(recieveData(categoryId,null,data))
        } catch(err){
            dispatch(recieveData(categoryId,err))
        }

        dispatch(finishRequest(categoryId))
    }
}