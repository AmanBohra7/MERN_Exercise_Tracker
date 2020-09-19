import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


class CreateExercise extends Component {
    constructor(props){
        super(props);
        this.state ={
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/users/")
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users:res.data.map(user => user.username)
                    });
                }
            });
            console.log(this.props);
        
    }

    onChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription = (e) =>{
        this.setState({
            description: e.target.value
        });
    }

    onChangeDate = (date) =>{
        this.setState({
            Date: date
        });
    }

    onChangeDuration = (e) =>{
        this.setState({
            duration: e.target.value
        });
    }

    onSubmit = (e) =>{
        // this if disable default onSubmit function of HTML
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        axios.post("http://localhost:5000/exercises/add",exercise)
            .then(res => {
                console.log(res.data);
            })
        // console.log(exercise);
        window.location = "/createExercise";
    }

    render() { 
        return ( 
            <form className="container" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select 
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        <option value="Select"  unselectable="unselectable" >Select</option>
                            {
                                this.state.users.map(user => {
                                    return <option
                                        key={user} 
                                        value={user}>
                                            {user}
                                        </option>
                                })
                            }
                    </select>
                </div>
                <div className="form-group">
                    <label>description: </label>
                    <textarea className="form-control" 
                        rows="3"
                        value={this.state.description}
                        onChange={this.onChangeDescription}>
                    </textarea>
                </div>
                <div className="form-group">
                    <label>Duration: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}/>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <ReactDatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                    />
                </div>
                <div className="form-group">
                    <input type="submit"
                        value="Create Exercise"
                        className="btn btn-info"/>
                </div>
            </form>
        );
    }
}
 
export default CreateExercise;