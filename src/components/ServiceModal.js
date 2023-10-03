import React, { useState } from 'react'
import ModalContent from './ModalContent'

const ServiceModal = (props) => {
    const{movie}=props
const[showModal,setShowModal]=useState(false)

const displayModal=()=>{
    setShowModal(true)
    
}
const hideModal=()=>{
    setShowModal(false)
}


  return (
    <>
      <button onClick={displayModal} className='btn'>View more &#8594; </button>

      {showModal && <ModalContent hideModal={hideModal} movie={movie}/>}
    </>
  )
}

export default ServiceModal