import React from "react";
import './Styles/navbar.css';
const Navbar=({size,setShow})=>
{
   return(
    <nav>
        <div className="nav_bar">
            <span className="shopname" onClick={()=>setShow(true)}>COMIs</span>
            <div className="cart" onClick={()=>setShow(false)}>
                
                <span >My cart</span>
                <span>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <span>{size}</span>    
            </div>
        </div>
    </nav>
   )
}
export default Navbar;
