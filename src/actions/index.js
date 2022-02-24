import jsonplaceholder from "../apis/jsonplaceholder"
import _ from 'lodash'

export const fetchPost = ()=>{
   return async (dispatch)=>{
    const response = await jsonplaceholder.get('/posts');
    dispatch({type:"FETCH_POSTS",payload: response.data})
    
   }
}



export const fetchUser = (id)=>{
   return async(dispatch)=>{
      const response = await jsonplaceholder.get(`/users/${id}`);
            dispatch({type:"FETCH_USER",payload: response.data})

   }
}

// export const fetchUser = (id)=>{
//    return (dispatch)=>{
//       _fetchUser(id,dispatch)
  
    
//    }
// }

// const _fetchUser = _.memoize(
//    async(id,dispatch)=>{
//       const response = await jsonplaceholder.get(`/users/${id}`); //memoization applied to get rid of repeatative api call
//       dispatch({type:"FETCH_USER",payload: response.data})
//    }

// );