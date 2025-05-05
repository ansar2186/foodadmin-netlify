import React, {useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Addfodd from './pages/AddFood/Addfood'
import ListFood from './pages/ListFood/ListFood'
import Orders from './pages/Orders/Orders'
import Menubar from './components/menubar/Menubar'
import Sidebar from './components/sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';


const App = () => {

  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div>
      <div className="d-flex" id="wrapper">
         
          <Sidebar sidebarVisible={sidebarVisible}/>
            
            <div id="page-content-wrapper">
              
               <Menubar toggleSidebar={toggleSidebar} />
               <ToastContainer/>
             
                <div className="container-fluid">
                  <Routes>
                    <Route path='/add' element={<Addfodd/>}/>
                    <Route path='/list' element={<ListFood/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/' element={<ListFood/>}/>
                  </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
