import React, { Component } from 'react';
import list from './exercises-list.component'

class UserList extends Component {
    
    state = {
        users : ''
    }
    
    componentDidMount(){
        
    }

    render() { 
        return ( 
            <ul>
                {/* {this.state.users.map( (user,index) => {
                    return <li key={index}>{user}</li>
                })} */}
            </ul>
         );
    }
}
 
export default UserList;