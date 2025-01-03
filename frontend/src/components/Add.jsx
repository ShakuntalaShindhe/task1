import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const navigate=useNavigate()

    
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            await axios.post(`https://task1-ib8s.onrender.com/api/products`,{name,price,description})
            navigate('/')
        }catch(err){
            console.log("Error in Adding the Books",err)
        }
    }
  return (
    <div className='addItems'>
      <h4>Add Products</h4>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>
     <button type='submit'>Add Books</button>
     </form>
    </div>
 
  )
}

export default Add
