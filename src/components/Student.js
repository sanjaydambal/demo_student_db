import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Student = () => {
    const [students, setStudents] = React.useState([]);

    useEffect(() => {
        axios.get("http://localhost:7000/")
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded'>
                <Link to="/create" className="btn btn-success">Add Student +</Link>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => (
                                <tr key={student.id}> 
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Student;
