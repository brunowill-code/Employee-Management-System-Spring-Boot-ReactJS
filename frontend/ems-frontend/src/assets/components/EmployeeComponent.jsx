import React, { useState } from 'react'

const EmployeeComponent = () => {

  const  [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFistName = (e) => setFirstName(e.target.value);

  const handleLastName = (e) => setLastName(e.target.value);

  const handleEmail = (e) => setEmail(e.target.value);
  

  function saveEmployee(e){
    e.preventDefault();

    const employee = {firstName, lastName, email}
    console.log( employee )
  }

  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'> 
            <form action="">
              <div className='form-group mb-2'>
                <label htmlFor="" className='form-lable'>First Name</label>
                <input 
                  type="text"
                  placeholder='Enter Employee first name'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={handleFistName}
                />
              </div>
              <div className='form-group mb-2'>
                <label htmlFor="" className='form-lable'>Last Name</label>
                <input 
                  type="text"
                  placeholder='Enter Employee last name'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={handleLastName}
                />
              </div>
              <div className='form-group mb-2'>
                <label htmlFor="" className='form-lable'>Email</label>
                <input 
                  type="text"
                  placeholder='Enter Employee email'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={handleEmail}
                />
              </div>
              <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent