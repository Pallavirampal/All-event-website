import React from 'react'
import '../CSS/popup.css'


function Popoup(props) {
 
  return (props.trigger)?(
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' style={{width:'25%',marginTop:'40px',marginLeft:'100px',padding:'5px 5px 5px 5px',textAlign:'center'}} onClick={()=>props.setTrigger(false)}>close</button>
        {props.children}
      </div>
    </div>
  ) :"";
}

export default Popoup