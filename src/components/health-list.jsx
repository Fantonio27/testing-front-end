import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Health_list(){
    const [Dataform, setDataform] = useState([])
    useEffect(()=>{
        axios.get('https://node-testing-123.onrender.com/health').then(response=> setDataform(response.data)).catch(err=>console.log(err)) 
    },[])

    const Health = () => {
        return(
            <div>
                1
            </div>
        )
    }
    return(
        <div className="container">

            {Dataform.map(data=>{
                return(
                    <div key={data._id}>
                        <p>{data.fullname}</p>
                        {Health()}
                    </div>
                )
            })
            }
            <h1>Health List</h1>
        </div>
    )
}