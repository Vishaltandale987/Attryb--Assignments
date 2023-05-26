import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Singlepage() {
  let post_Id = localStorage.getItem("New_car_id");
const [post, setPost] = useState({})


    const get_post_by_id = async () => {
        try {
          const res = await axios(`https://serverside-qga2.vercel.app/oem/${post_Id}`);
          setPost(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        get_post_by_id()
      }, [])
        console.log("post",post)
      
  return (
    <div className='singlepagediv'>

<img src={post.img} alt="" style={{
            width: "95%",
            margin:"auto",
            height:'30em',
            border:'1px solid gray'

        }} />
        
        {/* <div className='car_info'> */}

<div
style={{
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  marginBottom: "20px",
  marginLeft: "30px",
  marginTop: "20px",
}}
>

      <p className='text'> <b> Model Name - {post.model_name} </b> </p>
      <p className='text'> <b> Year Model - {post.year_model} </b> </p>
      <p className='text'> <b> Color - {post.colors} </b> </p>
      <p className='text'> <b> Mileage {post.mileage} </b> </p>
      <p className='text'> <b> Power - {post.Power} </b> </p>
      <p className='text'> <b> Max Speed - {post.max_speed} </b> </p>
</div>
      

<Button colorScheme='facebook' mb={10} onClick={() => alert("Work in Progress.")
      }>Buy</Button>
 

    </div>
  )
}

export default Singlepage
