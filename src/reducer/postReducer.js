import {FETCH_POSTS,NEW_POST,USER_DATA} from '../actions/type';

const initialState ={
    userList:[],
  
}

export default function (state= initialState,action) {
    switch(action.type) {
        case USER_DATA:
            return{
                ...state,
                userList:action.payload
            }   
        default:
          return state;
    }
}