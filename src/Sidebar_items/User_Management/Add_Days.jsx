import './Add_Days.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Add_Day() {

    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get('https://backend-api-2-qep2.onrender.com/')
            .then((response) => {
                setdata(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })

    }, [])

    if (loading) {
        return (
            <div className='loading-container'>
                <div className='loading-spinner'></div>
                
            </div>
        )
    }

    return (
        <>
            <div className='Daycontainer'>
                <div className='table-items'>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Salary</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((res, index) => (
                                <tr key={index}>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.role}</td>
                                    <td>{res.department}</td>
                                    <td>{res.salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}