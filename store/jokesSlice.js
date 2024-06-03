import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/global/statuses/statuses";
import API from "../src/http";

const jokeSlice = createSlice({
    name : 'jokes',
    initialState : {
        jokes : [],
        status : null
    },
    reducers : {
        setJokes(state,actions){
            state.jokes = actions.payload
        },
        setStatus(state,actions){
            state.status = actions.payload
        }
    }
})
export const {setJokes,setStatus} = jokeSlice.actions

export default jokeSlice

export function fetchJoke (){
    return async function fetchJokeThunk(dispatch){
    dispatch(setStatus(STATUSES.LOADING))
    try{
        const response = await API.get("Programming,Dark,Pun")
        if(response.status === 200){
            dispatch(setJokes(response.data))
            dispatch(setStatus(STATUSES.SUCCESS))
            
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
       
    }catch(error){
        dispatch(setStatus(STATUSES.ERROR))
    }

    }
}