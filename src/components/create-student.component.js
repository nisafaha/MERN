import React, { Component } from 'react';
import axios from 'axios';

export default class CreateStudents extends Component {
    constructor(props) {
        super(props);

        this.onChangename = this.onChangename.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeStream = this.onChangeStream.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: 0,
            stream: '',
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            name: 'test user'
        })
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeStream(e) {
        this.setState({
            stream: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const student = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            stream: this.state.stream
        }

        console.log(student);

        axios.post('http://localhost:4000/student/add', student)
            .then(res => console.log(res.data));

        window.location = '/';
    }
    render() {
        return (
            // <div>
            //     <p>You are in Create Student Component</p>
            // </div>
            <div>
                <h3>Create New Student Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Student Name: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangename}>
                            {/* {
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            } */}
                        </select>
                    </div>
                    <div className="form-group">
                            <label>Email: </label>
                            <input type="email" 
                                required
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className="form-group">
                            <label>Phone: </label>
                            <input type="Number" 
                                required
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                            />
                    </div>
                    <div className="form-group">
                            <label>Stream: </label>
                            <input type="text" 
                                required
                                className="form-control"
                                value={this.state.stream}
                                onChange={this.onChangeStream}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Student Log" className="btn btn-primary" />
                    </div>
                </form>
                           
            </div>
        )
    }
}