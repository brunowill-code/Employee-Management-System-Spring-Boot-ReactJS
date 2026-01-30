import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../../services/EmployeeService'
import { useNavigate , useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const  [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  useEffect(() =>{

    if(id){
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
      }).catch(error =>{
        console.error(error); 
      })
    }

  }, [id]);

  const navigator = useNavigate();

  const handleFistName = (e) => setFirstName(e.target.value);

  const handleLastName = (e) => setLastName(e.target.value);

  const handleEmail = (e) => setEmail(e.target.value);
  

  function saveOrUpdateEmployee(e){
    e.preventDefault();

    if(validateForm()){
      
      const employee = {firstName, lastName, email}
      console.log( employee )
      
      if(id){
          updateEmployee(id, employee).then((response)=>{
            console.log(response.data);
            navigator('/employees')
          }).catch(error =>{
            console.error(error);
          })
      } else {
          createEmployee(employee).then((response) => {
          console.log(response.data)
          navigator('/employees')
      }).catch(error=>{
          console.error(error);
      })
      }
    }    
  }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors}

    if(firstName.trim()){
      errorsCopy.firstName = '';
    } else{
      errorsCopy.firstName = 'First name is required'
      valid = false;
    }

    if(lastName.trim()){
      errorsCopy.lastName = '';
    } else{
      errorsCopy.lastName = 'First name is required'
      valid = false;
    }

    if(email.trim()){
      errorsCopy.email = '';
    } else{
      errorsCopy.email = 'First name is required'
      valid = false;
    }

    setErrors(errorsCopy)

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Upgrade Employee</h2>
    } else{
      return <h2 className='text-center'>Add Employee</h2>
    }
  }


  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
              pageTitle()
          }
          <div className='card-body'> 
            <form action="">
              <div className='form-group mb-2'>
                <label htmlFor="" className='form-lable'>First Name</label>
                <input 
                  type="text"
                  placeholder='Enter Employee first name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${ errors.firstName ?'is-invalid': ''}`}
                  onChange={handleFistName}
                />
                { errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div> }
              </div>
              <div className='form-group mb-2'>
                <label htmlFor="" className='form-lable'>Last Name</label>
                <input 
                  type="text"
                  placeholder='Enter Employee last name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${ errors.lastName ?'is-invalid': ''}`}
                  onChange={handleLastName}
                />
                { errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div> }

            
              </div>
              <div className='form-group mb-2'>
                <label htmlFor="" className='form-lable'>Email</label>
                <input 
                  type="text"
                  placeholder='Enter Employee email'
                  name='email'
                  value={email}
                  className={`form-control ${ errors.email ?'is-invalid': ''}`}
                  onChange={handleEmail}
                />
                { errors.email && <div className='invalid-feedback'>{errors.email}</div> }
              </div>
              

              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent