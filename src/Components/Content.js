import React,{useState} from'react';
import list from './data';
import Cards from './Card';
import './Styles/Content.css'
const Content =({handleClick})=>
{

    const [data,filterdata] = useState(list);

    const filtercontent = (value) =>
    {
        
        const newlist = list.filter((element)=>
        {
            return element.type === value
        }); 
        filterdata(newlist);
    }

     return (
        <React.Fragment>
        <div className='filter'>
        <button onClick={()=>filtercontent('Movies')}>Movies</button>
        <button onClick={()=>filtercontent('series')}>series</button>
        <button onClick={()=>filterdata(list)}>All</button>
        </div>
        
    <div className='section'>
        {
            data.map((item)=>(
             <Cards key={item.id} item={item} handleClick={handleClick}/>    
        ))}
    </div>
    </React.Fragment>
    );
}

export default Content;