import { GET_JOBS } from "../actions";


const initialState={
    data:[]
}

const  dataReducer=function(state =initialState, action){
    switch (action.type) {
        case GET_JOBS:
            return{...state,
                data:action.payload};
      



        default :return state;
    }
}
export default dataReducer;