import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => {
    <tr>
        <td>{props.student.name}</td>
        <td>{props.student.email}</td>
        <td>{props.student.phone}</td>
        <td>{props.student.stream}</td>
        <td>
            <Link to={"/edit/"+props.student._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteStudent(props.student._id)} }>Delete</a>
        </td>
    </tr>
}

export default class StudentsList extends Component {
    
    constructor(props) {
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);

        this.state = {students: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/student')
            .then((response) => {
                this.setState({students: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    deleteStudent(id) {
        axios.delete('http://localhost:4000/student/' + id)
            .then((res => console.log(res.data)));
        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        })
    }

    studentList() {
        return this.state.students.map(currentstudent => {
            return <Student students={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id} />;
        })
    }
    render() {
        return (
            // <div>
            //     <p>You are in Student List Component</p>
            // </div>

            <div>
                <h3>Student List So far..</h3>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Stream</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.studentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}