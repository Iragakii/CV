import { Canvas } from '@react-three/fiber'
import React from 'react'
import CarCPN from './CarCPN'


const MainPage = () => {

  return (
    <>
      <div className='orbit'>
      <Canvas>
        <CarCPN></CarCPN>
      </Canvas>
      
      </div>
    </>
  )
}

export default MainPage
