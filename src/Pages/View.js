import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import firebaseDB from "../firebase";
import './view.css'


const View = () => {
  const [student, setstudent] = useState({})
    
  const {id} = useParams()
  
  useEffect(() => {
   firebaseDB.child(`student/${id}`).get().then((snapshot) =>{
   if(snapshot.exists()){
     setstudent({...snapshot.val()})
   }else{
      setstudent({})
   }
   })
  }, [id])
  console.log(student);
  return (
    
    <div style={{marginTop:"50px"}}>
    <div className='card'>
        <div className='card-header'>
            <p>Student Details</p>
        </div> 
   <div className='container'>
    <strong>ID: </strong>
    <span>{id}</span>
    <br />
    <br />
    <strong>Name: </strong>
    <span>{student.name}</span>
    <br />
    <br />
    <strong>Contact: </strong>
    <span>{student.contact}</span>
    <br />
    <br />
    <strong>Fees: </strong>
    <span>{student.fees}</span>
    <br />
    <br />
    <strong>Status: </strong>
    <span>{student.status}</span>
    <br />
    <br />

      <Link to='/'>
        <button className='btn btn-edit'> Go Back </button>
      </Link>
   </div>
    </div>
    </div>
  )
}

export default View