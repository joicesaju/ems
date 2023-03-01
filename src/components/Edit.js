import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';


function Edit() {

const h = useNavigate()

  const updt=(e)=>{
    e.preventDefault()
    let emp = Employee[index]
    console.log(emp);

    emp.empname=name;
    emp.age=age;
    emp.designation=designation;
    emp.salary=salary

    console.log(emp);
    h('/')
  }

  const [id,setId]=useState('')
  const [name,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)


  useEffect(()=>{
   setId(localStorage.getItem("id"));
   setEmpname(localStorage.getItem("name"));
   setAge(localStorage.getItem("age"));
   setDesignation(localStorage.getItem("designation"));
   setSalary(JSON.parse(localStorage.getItem("salary")));
  },[])

  var index = Employee.map(item=>item.id).indexOf(id)
  console.log(index);


 console.log(salary);
  return (
    <div>
        <h2 style={{textAlign:"center",textDecoration:"underline"}}>Update Employee Details</h2>
        <p style={{color:"black"}} className="m-4">“Everything Kyndryl does across the digital workplace is data-driven, with analytics guiding and being prescriptive regarding what the end-user experience needs to be, facilitated through its cognitive channel. Kyndryl focuses on the integration of analytics, cognitive, and automation into all workplace offerings.” — NelsonHall</p>
        
        <Row className='p-2' style={{color:"black"}}>
            <Col className='ms-5' md={5}>
            <img  className='ms-4' style={{borderRadius:"10px",height:'400px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULYaa0irIms-_KYRTOejUq263AUJ3cpSvUQ&usqp=CAU'/>
            </Col>

            <Col className='w-100 '>
            <Form className='border  border-1 border-dark p-5 me-5'>
      <Form.Group className="mb-3" >
       
        <Form.Control type="text" placeholder="Enter name"  value={name} onChange={(e)=>setEmpname(e.target.value)} required/>  
      </Form.Group>

      

      <Form.Group className="mb-3"  >
      
        <Form.Control type="text" placeholder="Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" >
     
        <Form.Control type="number" placeholder="Age"  value={age} onChange={(e)=>setAge(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" >
      
        <Form.Control type="number" placeholder="Enter salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="i Agree" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{borderRadius:"10px",border:"1px solid black",color:"black"}} onClick={(e)=>updt(e)}>
        Update
      </Button>
    </Form>
            </Col>

           
        </Row>
   
    </div>
  )
}

export default Edit
