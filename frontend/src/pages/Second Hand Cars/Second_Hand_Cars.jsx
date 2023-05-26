import React, { useState, useEffect } from "react";
import axios from "axios";
import "./car.css";

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
  Select,
} from "@chakra-ui/react";
import SecondHandCarSubmitform from "../../components/Submit form for Second hand car/SecondHandCarSubmitform";
import SecondHandCarInventry from "../../components/Submit form for Second hand car/SecondHandCarInventry";

function Second_Hand_Cars() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [secondcardata, setsecondcardata] = useState();
  // console.log("secondcardata", secondcardata);
  // get post
  const getPost = async () => {
    try {
      const res = await axios("http://localhost:8088/dealers");
      setsecondcardata(res.data);
    } catch (error) {
      console.log(error);
    }
  };


let id = localStorage.getItem("id");




  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h1>second hand car</h1>

      <div className="filter"> 

{
  id === "646f274d5e49494745f215e4" ?
  
  <Button onClick={onOpen}>Add car</Button> : null
}

<Select placeholder='Select option' className="flttertag" w='400'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>

<Select placeholder='Select option' w='400'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  </div>
  

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Second hand Car Specifications form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SecondHandCarSubmitform />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div id="secondcarInventry" >
      {secondcardata?.map((el, index) => {

        return <SecondHandCarInventry key={index} data={el} />;
      })}
      </div>
    </div>
  );
}

export default Second_Hand_Cars;
