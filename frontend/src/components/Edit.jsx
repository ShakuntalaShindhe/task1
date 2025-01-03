import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const[name,setName]=useState('')
    const[description,setDescription]=useState('')

  const navigate=useNavigate()
  const{id}=useParams()

  useEffect(()=>{
   const fetchData=async()=>{
      try{
        const resp=await axios.get(`https://task1-ib8s.onrender.com/api/products/${id}`)
        const{name,description}=resp.data;
         setName(name),
         setDescription(description)

      }catch(err){
        console.log(("error in fetching the data",err))
      }
    }
    fetchData()
  },[id])

 const handleSubmit=async(e)=>{
  e.preventDefault()
  try{
    await axios.put(`https://task1-ib8s.onrender.com/api/products/${id}`,{name,price,description});
    navigate('/')
  }catch(error){
    console.log("Error in Editing the books",error)
  }
 }

  return (
    <div className='edit'>
      <h4>Add Category</h4>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type='date' value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>
     <button type='submit'>Add Books</button>
     </form>
    </div>
  )
}

export default Edit
