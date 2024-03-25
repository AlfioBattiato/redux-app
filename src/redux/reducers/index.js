
const initialState = {

    favourites: {
      content: [],
    },
  }
  
  const mainReducer = function (state = initialState, action) {
  
    switch (action.type) {
   
      case 'ADD_JOB':
        return {
          ...state,
          favourites: {
            ...state.favourites, 
            content: state.favourites.content.concat(action.payload),
          },
        }
  
      case 'DELETE_JOB':
        return {
          ...state,
          favourites: {
            ...state.favourites,
            content: state.favourites.content.filter((job, i) => i !== action.payload),
          },
        }
  
      default:
        return state
    }
  }
  
  export default mainReducer