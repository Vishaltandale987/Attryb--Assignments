import { EmailIcon, SearchIcon } from '@chakra-ui/icons'
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'


function OEMSearch() {
    const [Q, setQ] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    // console.log(Q)

    const [SearchData, setSearchData] = useState()


    const getPost = async () => {
        try {
          const res = await axios(`https://serverside-qga2.vercel.app/oem/search/${Q}`);
          setSearchData(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      useMemo(() => getPost(), [Q])

      
    
  return (

    <div>
    

<Button leftIcon={<SearchIcon />}  onClick={onOpen}>Search</Button>

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search OEM-Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input
            placeholder={"Year Model"}
            type="text"
            onChange={(e) =>
                setQ( e.target.value )
            }
            required
          />

{SearchData?.map((el, index) => {

return       <NavLink to="/newCarSinglePage">

<p onClick={() => localStorage.setItem("New_car_id", el._id)  }> <b> {el.model_name} </b> </p> 
</NavLink>


})}

          
          </ModalBody>

        
        </ModalContent>
      </Modal>
          
    </div>
  )
}

export default OEMSearch
