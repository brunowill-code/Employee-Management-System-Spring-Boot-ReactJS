
import './App.css'
import EmployeeComponent from './assets/components/EmployeeComponent'
import FooterComponent from './assets/components/FooterComponent'
import HeaderComponent from './assets/components/HeaderComponent'
import ListEmployeeComponent from './assets/components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes >
          <Route path='/' element = {<ListEmployeeComponent />} ></Route>
          <Route path='/employees' element = {<ListEmployeeComponent />}></Route>
          <Route path='/add-employee' element= {<EmployeeComponent />}></Route>
          <Route path='/edit-employee/:id' element= {<EmployeeComponent />}> </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
