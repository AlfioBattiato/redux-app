export const ADD_JOB='ADD_JOB'
export const DELETE_JOB='DELETE_JOB'
export const GET_JOBS = 'GET_JOBS'


export const addJobAction=(job)=>{
    return{
        type:ADD_JOB,
        payload:job
    }
}
export const removeJobAction=(index)=>{
    return{
        type:DELETE_JOB,
        payload:index
    }
}

export const getFetchAction=(query)=>{

    return async(dispatch,getState)=>{

        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";



        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
              const { data } = await response.json();
            //   setJobs(data);
              dispatch({
                type:GET_JOBS,
                payload:data});
            } else {
              alert("Error fetching results");
            }
          } catch (error) {
            console.log(error);
          }



    }
}