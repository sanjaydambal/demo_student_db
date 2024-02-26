import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:7000/update/${id}`, { name, email }) // Corrected URL with slash between base URL and endpoint
            .then(res => {
                setName('');
                setEmail('');
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-5'>
                <form onSubmit={handleSubmit}>
                    <h1>Update Student</h1>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" 
                            value={name} // Add value prop to maintain controlled input
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" 
                            value={email} // Add value prop to maintain controlled input
                            onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
