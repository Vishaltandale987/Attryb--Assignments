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

function SecondHandCarSinglePage() {
  let post_Id = localStorage.getItem("Second_hand_car_id");
  const [post, setPost] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();


//   console.log(post)

  const get_data_by_id = async () => {
    try {
      const res = await axios(`http://localhost:8088/dealers/${post_Id}`);
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

            const res = await axios.delete(`http://localhost:8088/dealers/${post._id}`);
            console.log(res.data)
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
            }}
            />
            ) : null}

      {id === "646f274d5e49494745f215e4" ? (
          <DeleteIcon onClick={handle_delete_car}
          style={{
              marginLeft: "20px",
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
      <p>{post?.model_name}</p>
      <p>{post?.year_model}</p>
      <p>{post?.original_paint}</p>
      <p>{post?.km_run}</p>
      <p>{post?.major_scratches}</p>
      <p>{post?.number_of_accidents_reported}</p>
      <p>{post?.number_of_previous_buyers}</p>
      <p>{post?.registration_place}</p>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Second hand Car Specifications form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editfrom />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {post?.description?.split(".").map((item, index) => {
        if (item === "") {
          return;
        }
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
}

export default SecondHandCarSinglePage;
