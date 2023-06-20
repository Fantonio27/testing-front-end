import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function create(props) {

    const [Dataform,setDataform] = React.useState(
        {
        fullname: "",
        temperature: '',
        email: '',
        phonenumber: ''
    })

    const onchangeDataform = (e) => {
        const { name, value } = e.target

        setDataform(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const onSubmitDataform = (e) => {
        e.preventDefault()

        // console.log(Dataform)
        axios.post('https://node-testing-123.onrender.com/health/add', Dataform).then(response=> console.log(response.data)).catch(err=>console.log(err)) 
    }


    return (
        <div className="container">
            <h1>Health List</h1>

            <form onSubmit={onSubmitDataform}>
                <div className="form-group">
                    <label>Fullname</label>
                    <input className="form-control" type="text" value={Dataform.fullname} name="fullname" onChange={onchangeDataform} required />
                    
                    <label>Temperature</label>
                    <input className="form-control" type="number" value={Dataform.temperature} name="temperature" onChange={onchangeDataform} required />

                    <label>Email</label>
                    <input className="form-control" type="email" value={Dataform.email} name="email" onChange={onchangeDataform} required />

                    <label>Phone Number</label>
                    <input className="form-control" type="number" value={Dataform.phonenumber} name="phonenumber" onChange={onchangeDataform} required />
                    
                    <br/>
                    <input type="submit" className="btn btn-primary" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}