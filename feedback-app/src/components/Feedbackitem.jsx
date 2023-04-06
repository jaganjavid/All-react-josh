import React from 'react'
import Card from './shared/Card';
import {FaPen,FaTrash} from "react-icons/fa";
// import {FaAccusoft} from "react-icons/fa";


const Feedbackitem = ({item,handleDelete}) => {
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button className="edit">
          <FaPen color='blue'/>
        </button>
        
        <div className='text-display'>{item.text}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
           <FaTrash color='red'/>
        </button>
    </Card>
  )
}

export default Feedbackitem