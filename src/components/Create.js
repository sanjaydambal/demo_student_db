import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:7000/create', {name, email})
        .then(res => {
            setName('')
             setEmail('')
             navigate('/')
         })
         .catch(err => {
            console.log(err)
         })
        
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-5'>
                <form onSubmit ={handleSubmit}>
                    <div className=" mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter name" 
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className=" mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" 
                        onChange = {(e) => setEmail(e.target.value)} />

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
