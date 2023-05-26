import React from 'react'
import "./CarSubmitform.css";
import { Button, border } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function New_car_Inventry({data}) {

    const add = () => {
        localStorage.setItem("New_car_id", data._id);
       
    
      };
  return (
    <div id='secondcarInventrys' >
        <img src={data.img} alt="" style={{
            width: "90%",
            margin:"auto",
            height:'30em',
            border:'1px solid gray'

        }} />
        <div className='car_info'>

      <p className="text" > <b>Model Name - {data.model_name}</b> </p>
     
      <p className="text" > <b> Price - {data.price}</b> </p>
     
      
        </div>
      <NavLink to="/newCarSinglePage">
          <Button colorScheme='whatsapp' mb={5} onClick={add}>see more detail</Button>
        </NavLink>
    </div>
  )
}

export default New_car_Inventry
