import React, { Component } from 'react';
import axios from 'axios'

class createUser extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    onNameChange = (e) =>{
        this.setState({
            username:e.target.value
        });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const newUsers = {
            username: this.state.username
        }
        axios.post("http://localhost:5000/users/add",newUsers)
            .then(res => {
                console.log(res.data);
            });
        window.location = "/createUser";
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={this.onSubmit} className="container">
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            onChange={this.onNameChange}
                            value={this.state.username}
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                                value="Create New User"
                                className="btn btn-info"/>
                    </div>
                    
                </form>
            </React.Fragment>
         );
    }
}
 
export default createUser;