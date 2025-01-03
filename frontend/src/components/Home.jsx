import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [product, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:6060/api/products')
                setProducts(response.data)
            } catch (err) {
                console.log('error', err)
            }
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:6060/api/products/${id}`)
            setProducts(product.filter((item) => item._id !== id))
        } catch (error) {
            console.log('Error in deleting', error)
        }
    }

    return (
        <div className='HomePage'>
            <Link to='/add'>Add Items</Link>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                                <Link to={`/edit/${item._id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
