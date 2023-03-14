import React,{useState,useEffect} from 'react';
import './Styles/cart.css';
const Cart =({cart,setCart,handleChange})=>
{
    const [totalprice,setprice] = useState(0);

    const handleRemove=(id) =>
    {
        const arr = cart.filter((item) => item.id!== id);
        setCart(arr);
        handlePrice();
    };
    const handlePrice =() =>
    {
        let  ans=0;
        cart.map((item) => (ans +=item.quantity *  item.price));
        setprice(ans);
    };
    useEffect(() =>
    {
       handlePrice();
    });
    
    return(
        <section>
            {
                cart.map((item) =>
                (
                    <div className="continer">
                        <div className="cartcontent">
                        
                        <div className="cartimage">
                            <img src={item.img} /> 
                        </div>
                        <div>
                        <p>{item.title}</p>
                        </div>
                        <div className='change button'>
                            <button onClick={()=> handleChange(item , +1)}>+</button>
                            <button>{item.quantity}</button>
                            <button onClick={()=> handleChange(item,-1)}>-</button>
                        </div>
                        <div className='changeprice'>
                            <span id="price">{item.price}</span>
                            <button onClick={()=>handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>

                    </div>
                    
                ) )  }
                <div className="total">
                    <span>Total</span>
                    <span>- {totalprice} $ </span>
                </div>

                            
        </section>
       
    );

};

export default Cart;