import React from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Toyota } from '../3dglbcode/Toyota'



const CarCPN = () => {
 
 
  return (
    <>
       <Environment preset='studio'></Environment>
        <OrbitControls enableZoom={false}></OrbitControls>
        <Toyota ></Toyota>
       
    </>
  )
}

export default CarCPN ;
