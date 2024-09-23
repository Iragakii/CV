import { Canvas } from '@react-three/fiber'
import React from 'react'
import CarCPN from './CarCPN'
import Intro from './Intro'
import LapCPN from './LapCPN'
import Mind from './Mind'
import Project from './Project'
import Cer from './Cer'



const MainPage = () => {

  return (
    <>
      <Intro></Intro>
      <Canvas  shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <CarCPN></CarCPN>
      </Canvas>
      <Mind></Mind>
      <Canvas  shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <LapCPN></LapCPN>
      </Canvas>
      <Project></Project>
      <Cer></Cer>
    </>
  )
}

export default MainPage
