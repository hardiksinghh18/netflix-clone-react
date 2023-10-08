import React, { useState } from 'react'
import ModalContent from './ModalContent'
import { UserAuth } from '../context/AuthContext'

const ServiceModal = (props) => {
  const{user}=UserAuth()

    const{movie,title}=props
const[showModal,setShowModal]=useState(false)

const displayModal=()=>{
    if(user){
      setShowModal(true)
    }
    else{
      alert("Please Login to use this feature")
    }
    
}
const hideModal=()=>{
    setShowModal(false)
}


  return (
    <>
      <button onClick={displayModal} className='btnwatchnow'>Watch Now &#8594; </button>

      {showModal && <ModalContent hideModal={hideModal} movie={movie}/>}
    </>
  )
}

export default ServiceModal