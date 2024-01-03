import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> BooksMania
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
// import React from 'react'

// function Sidebar() { 
//      return (   
//          <div className='bg-white sidebar p-2'>        
//          <div className='m-2'>            
//          <i className='bi bi-bootstrap-fill me-3 fs-4'></i>      
//                <span className='brand-name fs-4'>Yousaf</span>       
//                 </div>        
//                 <hr className='text-dark' />       
//                  <div className='list-group list-group-flush'>           
//                   <a className='list-group-item py-2'>                
//                   <i className='bi bi-speedometer2 fs-5 me-3'></i>                
//                   <span >Dashboard</span>            
//                   </a>            
//                   <a className='list-group-item py-2 '>               
//                    <i className='bi bi-house fs-5 me-3'></i>                
//                    <span >Home</span>           
//                     </a>            
//                     <a className='list-group-item py-2'>                
//                     <i className='bi bi-table fs-5 me-3'></i>                
//                     <span >Products</span>            
//                     </a>            
//                     <a className='list-group-item py-2'>                
//                     <i className='bi bi-clipboard-data fs-5 me-3'></i>                
//                     <span >Report</span>           
//                      </a>            
//                      <a className='list-group-item py-2'>                
//                      <i className='bi bi-people fs-5 me-3'></i>                
//                      <span >Customers</span>            
//                      </a>            
//                      <a className='list-group-item py-2'>                
//                      <i className='bi bi-power fs-5 me-3'></i>                
//                      <span >Logout</span>            
//                      </a>        
//                      </div>    
//                      </div>  )}
// export default Sidebar