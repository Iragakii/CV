import { Canvas } from '@react-three/fiber'
import React from 'react'
import CarCPN from './CarCPN'
import Intro from './Intro'


const MainPage = () => {

  return (
    <>
      <Intro></Intro>
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <CarCPN></CarCPN>
      </Canvas>
      
      
    </>
  )
}

export default MainPage
