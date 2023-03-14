import React,{useState} from "react";
import Navbar from './Components/navbar';
import Content from "./Components/Content";
import Cart from "./Components/cart";
const App=()=>
{
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);

  const handleClick = (item) =>
  {
      if(!cart.includes(item)) 
      {
        setCart([...cart,item]) ;
      }   
  };

const handleChange = (item, d) =>{
  let ind = -1;
  cart.forEach((data, index)=>{
     if (data.id === item.id)
        ind = index;
  });
  const tempArr = cart;
  tempArr[ind].quantity += d;
  
  if (tempArr[ind].quantity === 0)
     tempArr[ind].quantity = 1;
  setCart([...tempArr])
};

  return(
    <React.Fragment>
     
       <Navbar setShow={setShow} size={cart.length}/>
       {
         show?<Content handleClick = {handleClick}/>: 
         <Cart cart={cart}  setCart={setCart} handleChange={handleChange}/>
       }
    </React.Fragment>     
  );
}

export default App;
