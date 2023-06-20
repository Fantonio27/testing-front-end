import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Health_list() {
    const [Dataform, setDataform] = useState([])
    useEffect(() => {
        axios.get('https://node-testing-123.onrender.com/health').then(response => setDataform(response.data)).catch(err => console.log(err))
    }, [])

    const Health = () => {
        return (
            <div>
                1
            </div>
        )
    }
    return (
        <div className="container">
            <h1>Health List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">fullname</th>
                        <th scope="col">temperature</th>
                        <th scope="col">email</th>
                        <th scope="col">phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {Dataform.map(data => {
                        return (
                            // <div key={data._id}>
                            //     <p>{data.fullname}</p>
                            //     {Health()}
                            // </div>
                            <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.fullname}</td>
                                <td>{data.temperature}</td>
                                <td>{data.email}</td>
                                <td>{data.phonenumber}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}