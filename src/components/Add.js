import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import uuid from 'react-uuid';

function Add() {
 let history = useNavigate()
  const [id,setId]=useState('')
  const [name,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)

  const adddata=(e)=>{
e.preventDefault()
let ids = uuid().slice(0,3)  ///creating uniq id
console.log(ids)
 Employee.push({
  id:ids,
  empname:name,
  age:age,
  designation:designation,
  salary:salary
 })
 history('/')
  }

  return (
    <div>
       <h2 style={{textAlign:"center",textDecoration:"underline"}}>Add Employee Details</h2>
        <p style={{color:"black"}} className="m-4">“Everything Kyndryl does across the digital workplace is data-driven, with analytics guiding and being prescriptive regarding what the end-user experience needs to be, facilitated through its cognitive channel. Kyndryl focuses on the integration of analytics, cognitive, and automation into all workplace offerings.” — NelsonHall</p>
        
        <Row className='p-2' style={{color:"black"}}>
            <Col className='ms-5' md={5}>
            <img  className='ms-4' style={{borderRadius:"10px",height:'400px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULYaa0irIms-_KYRTOejUq263AUJ3cpSvUQ&usqp=CAU'/>
            </Col>

            <Col className='w-100 '>
            <Form className='border  border-1 border-dark p-5 me-5'>
      <Form.Group className="mb-3" >
       
        <Form.Control type="text" placeholder="Enter name"
          // value={name} 
          onChange={(e)=>setEmpname(e.target.value)} required
          />  
      </Form.Group>

      

      <Form.Group className="mb-3"  >
      
        <Form.Control type="text" placeholder="Designation" 
        // value={designation} 
        onChange={(e)=>setDesignation(e.target.value)} required
        />
      </Form.Group>

      <Form.Group className="mb-3" >
     
        <Form.Control type="number" placeholder="Age" 
        //  
        value={age} onChange={(e)=>setAge(e.target.value)} required
         />
      </Form.Group>

      <Form.Group className="mb-3" >
      
        <Form.Control type="number" placeholder="Enter salary" 
        // value={salary} 
        onChange={(e)=>setSalary(e.target.value)} required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="i Agree" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{borderRadius:"10px",border:"1px solid black",color:"black"}} onClick={(e)=>adddata(e)}>
        Add
      </Button>
    </Form>
            </Col>

           
        </Row>
   
    </div>
  )
}

export default Add
