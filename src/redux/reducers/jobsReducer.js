import { ADD_JOB } from "../actions";
import { DELETE_JOB } from "../actions";


const initialState={
    content:[]
}

const  jobReducer=function(state =initialState, action){
    switch (action.type) {
        case ADD_JOB:
            return{...state,
                content:[...state.content,action.payload]};
        case DELETE_JOB:
            return{...state,
                content:state.content.filter((job,indice)=> indice!==action.payload)};





        default :return state;
    }
}
export default jobReducer;