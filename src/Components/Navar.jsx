import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import brandlogo from '../brandlogo.png'
export default function Navar() {
  return (
    <nav className='navbar navbar-expand-sm px-3 border-bottom' id='navbar'>
         <div style={{width:'300px'}}>
         <Link to='/' className="navbar-brand">
            <img src={brandlogo} style={{width:"180px",height:"80px"}} alt="alt" />
         </Link>
         </div>

         <button className=" navbar-toggler">
            <span className="navbar-toggler-icon"></span>
         </button>
         <button className=" btn bigscreen btn-lg" >
            <span className="navbar-toggler-icon"></span>
         </button>
         <input type="text" className="form-control w-25 ms-3 p-3" placeholder='Search anything here...' />
         <div className="collapse navbar-collapse">
            <ul className='navbar-nav ms-auto'>
               <li>
                   <Link to='chat' className='nav-link mt-2' style={{fontSize:"30px"}}><i class="fa-solid fa-message"></i><sup className=' rounded-circle p-1 fw-bold text-white' style={{fontSize:"15px",background:"#8210fb",position:"relative",top:"-20px",right:"10px"}}>20</sup></Link>
               </li>
               <li>
                   <Link to='chat' className='nav-link mt-2' style={{fontSize:"30px"}}><i class="fa-regular fa-bell"></i><sup className=' rounded-circle p-1 fw-bold text-white' style={{fontSize:"15px",background:"#8210fb",position:"relative",top:"-20px",right:"10px"}}>20</sup></Link>
               </li>
               <li>
                  <div className="profile d-flex text-secondary align-items-center gap-2">
                      <div className='p-3'>
                            <Avatar alt="Asim" src="/static/images/avatar/1.jpg" style={{ width: 50, height: 50 }} />
                      </div>
                      <div>
                          <span className='d-block fs-4 fw-bold'>Asim sheikh</span>
                          <small>Admin</small>
                      </div>
                  </div>
               </li>
            </ul>
         </div>
    </nav>
  )
}
