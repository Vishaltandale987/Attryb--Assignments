import React from 'react'
import NewCarSubmitform from '../../components/submit new car form/NewCarSubmitform'
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

function New_cars_page() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <h1>New car</h1>

      <Button onClick={onOpen}>Add car</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>New Car Specifications form</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <NewCarSubmitform/>
  
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

export default New_cars_page
