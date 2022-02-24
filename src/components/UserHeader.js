import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

function UserHeader(props) {
    useEffect(() => {
        props.fetchUser(props.userId)
        
      
    
      
    }, [])
 
    
  
    if(!props.user){
        return <div>loading...</div>;
    }
    //ekhane prottek ta userheader component er jonno ekti kore api call hocce.orthat 100 ti user header component er jonno 100 ti api call hocce
  return (
    <div className='header'>{props.user.name}</div>
  )
}

const mapStateToProps = (state,ownProps)=>{
    return { user:state.users.find(user=>user.id===ownProps.userId)}; 

}

export default connect(mapStateToProps,{fetchUser})(UserHeader)