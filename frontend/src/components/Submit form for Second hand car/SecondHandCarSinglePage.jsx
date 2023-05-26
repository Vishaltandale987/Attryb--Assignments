import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CarSubmitform.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    
  } from "@chakra-ui/react";
import SecondHandCarSubmitform from "./SecondHandCarSubmitform";
import Editfrom from "./Editfrom";
import { Navigate } from "react-router-dom";

function SecondHandCarSinglePage() {
  let post_Id = localStorage.getItem("Second_hand_car_id");
  const [post, setPost] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();


//   console.log(post)

  const get_data_by_id = async () => {
    try {
      const res = await axios(`https://serverside-qga2.vercel.app/dealers/${post_Id}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_data_by_id();
  }, []);

  let id = localStorage.getItem("id");


  const handle_delete_car = async () => {

    try {

        if( id === "646f274d5e49494745f215e4"){

            const res = await axios.delete(`https://serverside-qga2.vercel.app/dealers/${post_Id}`);
            alert("Post has been delete")
            window.location.reload(false);

          
            
        }else{
            alert("Only dealers have access to delete")
        }
      } catch (error) {
        console.log(error);
      }
  }


  return (
    <div className="singlediv">

        <div style={{
            display: "flex"
          
        }}>

      {id === "646f274d5e49494745f215e4" ? (
          <EditIcon onClick={onOpen}
          style={{
              marginLeft: "20px",
              marginBottom:"30px",
              marginTop:'20px'
            }}
            />
            ) : null}

      {id === "646f274d5e49494745f215e4" ? (
          <DeleteIcon onClick={handle_delete_car}
          style={{
            marginLeft: "20px",
            marginBottom:"30px",
            marginTop:'20px',
            
            }}
            />
            ) : null}
            </div>

      <img
        src={post?.img}
        alt=""
        style={{
          margin: "auto",
          width: "90%",
        }}
      />

      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginBottom: "20px",
          marginLeft: "50px",
          marginTop: "20px",
        }}
      >

      <p className="text">  <b> Model Name - {post?.model_name} </b></p>
      <p className="text" > <b> Year Model - {post?.year_model} </b></p>
      <p className="text" > <b> Original Paint - {post?.original_paint} </b></p>
      <p className="text" > <b>  KMs on Odometer - {post?.km_run} </b></p>
      <p className="text" > <b> Major Scratches - {post?.major_scratches} </b></p>
      <p className="text" > <b> Number of accidents reported - {post?.number_of_accidents_reported} </b></p>
      <p className="text" > <b> Number of previous buyers - {post?.number_of_previous_buyers} </b></p>
      <p className="text" > <b> Registration Place - {post?.registration_place} </b></p>
      <p className="text" > <b> Mileage - {post?.mileage} </b></p>
      <p className="text" > <b> Price - {post?.price} </b></p>
      </div>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Second hand Car Specifications Edit form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editfrom  />
          </ModalBody>

         
        </ModalContent>
      </Modal>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginBottom: "20px",
          marginLeft: "50px",
          marginTop: "20px",
        }}
      >

      <p className="text" > <b> Car Description  </b></p>

      {post?.description?.split(".").map((item, index) => {
        if (item === "") {
          return;
        }
        return <li   className="text"  key={index}>{item}</li>;
      })}
      </div>

      <Button colorScheme='facebook' mb={10} onClick={() => alert("Work in Progress.")
      }>Buy</Button>
    </div>
  );
}

export default SecondHandCarSinglePage;
