import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { FaPen,FaTrashAlt, FaUserPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
function Form() {
  
    const histoty=  useNavigate()

    const edt=(item)=>{
    localStorage.setItem("id",item.id)
    localStorage.setItem("name",item.empname)
    localStorage.setItem("age",item.age)
    localStorage.setItem("designation",item.designation)
    localStorage.setItem("salary",JSON.stringify(item.salary))
    }

    const dlt=(id)=> {
    //  console.log(  Employee.filter((item)=>item.id!==id));
    let index = Employee.map((item)=>item.id).indexOf(id)
    console.log(index)
    Employee.splice(index,1)
    console.log(Employee)
    histoty('/')
    }

  return (
    <div>
        <h2 style={{textAlign:"center",textDecoration:"underline"}}>Employee Management System</h2>
        <p style={{color:"black"}} className="m-4">“Everything Kyndryl does across the digital workplace is data-driven, with analytics guiding and being prescriptive regarding what the end-user experience needs to be, facilitated through its cognitive channel. Kyndryl focuses on the integration of analytics, cognitive, and automation into all workplace offerings.” — NelsonHall</p>

<Link to={'/add'}>
<Button className='ms-3' style={{borderRadius:"10px",border:"1px solid black",color:"black"}}><FaUserPlus/> (Add_Empoyee) </Button>
</Link>

       <Table striped bordered hover variant="dark" style={{margin:"20px"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Age</th>
          <th>Designation</th>
          <th>salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
       
        Employee.map((item)=>(
        <tr>
            <td>{item.id}</td>
            <td>{item.empname}</td>
            <td>{item.age}</td>
            <td>{item.designation}</td>
            <td>{item.salary}</td>
            <td>

              <Link to={'/edit'}>
              <Button style={{borderRadius:"10px"}} className="me-3" onClick={()=>edt(item)}><FaPen/></Button>
              </Link>                
                <Button onClick={()=>dlt(item.id)} style={{borderRadius:"10px"}}><FaTrashAlt/></Button></td>
           
        </tr>
        ))
       }
      </tbody>
    </Table>
    </div>
  )
}

export default Form
