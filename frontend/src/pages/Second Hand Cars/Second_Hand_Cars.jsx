import React from 'react'

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
} from '@chakra-ui/react'
import SecondHandCarSubmitform from '../../components/Submit form for Second hand car/SecondHandCarSubmitform'

function Second_Hand_Cars() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <h1>second hand car</h1>

      <Button onClick={onOpen}>Add car</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Second hand Car Specifications form</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <SecondHandCarSubmitform/>
  
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    

    </div>
  )
}

export default Second_Hand_Cars
