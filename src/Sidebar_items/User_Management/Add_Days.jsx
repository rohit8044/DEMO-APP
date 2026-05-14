import './Add_Days.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Add_Day() {

    const [data, setdata] = useState([])

    useEffect(() => {

        axios.get('https://harry80442s.onrender.com/Api/all')
            .then((response) => {

                console.log(response.data)

                setdata(response.data)

            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <>
            <div className='Daycontainer'>

                <div className='table-items'>

                    <table border="1">

                        <thead>
                            <tr>
                               
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Salary</th>
                            </tr>
                        </thead>

                        <tbody>

                            {data.map((res, index) => {
                                return (
                                    <tr key={index}>

                                       
                                        <td>{res.name}</td>
                                        <td>{res.email}</td>
                                        <td>{res.role}</td>
                                        <td>{res.department}</td>
                                        <td>{res.salary}</td>

                                    </tr>
                                )
                            })}
 
                        </tbody>

                    </table>

                </div>

            </div>
        </>
    )
}