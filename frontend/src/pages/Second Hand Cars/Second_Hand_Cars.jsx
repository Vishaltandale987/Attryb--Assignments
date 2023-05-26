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
import DealerSearch from "../../components/search/Dealer/DealerSearch";

function Second_Hand_Cars() {
  let id = localStorage.getItem("id");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [secondcardata, setsecondcardata] = useState();
  const [selectedPaintValue, setSelectedPaintValue] = useState('all');
  const [selected_PriceValue, setSelected_PriceValue] = useState('all');
  const [selected_MilageValue, setSelected_MilageValue] = useState('all');






  console.log(selectedPaintValue)

  // console.log("secondcardata", secondcardata);
  // get post
  const getPost = async () => {
    try {
      const res = await axios(`https://serverside-qga2.vercel.app/dealers/${selectedPaintValue}/${selected_PriceValue}/${selected_MilageValue}`);
      setsecondcardata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handle_paint_Change = (event) => {
    setSelectedPaintValue(event.target.value);
  };

  const handle_price_Change = (event) => {
    setSelected_PriceValue(event.target.value);
  };

  const handle_Milage_Change = (event) => {
    setSelected_MilageValue(event.target.value);
  };


// console.log(selectedPaintValue)

  useEffect(() => {
    getPost();
  }, [selectedPaintValue,selected_PriceValue,selected_MilageValue]);

 



//  let aa = secondcardata?.filter(item => item.original_paint === selectedPaintValue)
 






  return (
    <div>
       <p style={{
        color: "rgb(220, 20, 60)",
        fontFamily:"inherit",
        fontSize:"50px",
        marginBottom:"30px"

      }}> <b> Second Hand Car Section</b> </p>

      <div className="filter"> 

{
  id === "646f274d5e49494745f215e4" ?
  
  <Button onClick={onOpen}>Add car</Button> : null
}

<Select placeholder='Color' w='400' name="colour" onChange={handle_paint_Change}>
<option value='all'>All</option>

  <option value='Red'>Red</option>
  <option value='White'>White</option>
  <option value='Black'>Black</option>

</Select>




<Select placeholder='Price' w='400' name="price" onChange={handle_price_Change}>
<option value='all'>All</option>

  <option value='500000'>more then 5 Lack</option>
  <option value='1000000'>more then 10 Lack</option>
  <option value='1500000'>more then 15 Lack</option>
</Select>


<Select placeholder='Mileage' w='400' name="milage" onChange={handle_Milage_Change}>
<option value='all'>All</option>

  <option value='10'>more then 10 </option>
  <option value='15'>more then 15 </option>
  <option value='10'>more then 20 </option>
</Select>

<DealerSearch/>



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
