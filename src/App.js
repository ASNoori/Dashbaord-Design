import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';
import Dashboardmain from './Dashboardmain/Dashboardmain';


function App() {
  // const[isOpen,setIsOpen]=useState(false);
  // const toggleSidebar = ()=>{
  //   setIsOpen(!isOpen);
  // }
  return (
  <>
  {/* <Navbar toggleSidebar={toggleSidebar}/>
  <Sidebar isOpen={isOpen}/>
  <Dashboardmain isOpen={isOpen}/> */}
  <Navbar/>
  <Sidebar/>
  <Dashboardmain/> 
  </>
  );
}

export default App;
