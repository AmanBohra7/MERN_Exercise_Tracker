import React, { Component } from 'react';
import axios from 'axios';

class ExerciseList extends Component {

    state = {
        username : [],
        description : [],
        duration : []
    }

    componentDidMount(){
        axios.get("http://localhost:5000/exercises/")
            .then(res => {
                console.log(res.data);
                let usernames = [];
                let descriptions = [];
                let durations = [];
                res.data.map( data => {
                    usernames.push(data["username"]);
                    descriptions.push(data["description"]);
                    durations.push(data["duration"]);
                    return null;
                } );
                this.setState(
                    {
                        username: usernames,
                        description: descriptions,
                        duration: durations
                    }
                )
                console.log(this.state);
            })
            .catch(err => {
                console.log(err);
            });
        // console.log("exercise list  mounted!");
        
    }
    render() { 
        return ( 
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>username</th>
                        <th>description</th>
                        <th>duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       this.state.description.map( (des,index) => {
                        return  <tr key={index}>
                              <td>{index}</td>
                              <td>{this.state.username[index]}</td>
                              <td>{des}</td>
                              <td>{this.state.duration[index]}</td>
                         </tr>
                     })
                    }
                    {/* <tr>
                        <td>1</td>
                        <td>Clark</td>
                        <td>Kent</td>
                        <td>clarkkent@mail.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John</td>
                        <td>Carter</td>
                        <td>johncarter@mail.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peter</td>
                        <td>Parker</td>
                        <td>peterparker@mail.com</td>
                    </tr>             */}
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default ExerciseList;