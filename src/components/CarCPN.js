import React, { useRef } from 'react'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Toyota } from '../3dglbcode/Toyota'
import { useFrame } from '@react-three/fiber'



const CarCPN = () => {
  const controlsRef = useRef();
  
  // Position of the object
  const objectPosition = [0, 0, 0];
  
  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();
    
    // Make the camera rotate around the Y-axis
    const radius = 5; // Distance from the object
    const speed = 0.5; // Rotation speed
    camera.position.x = radius * Math.sin(elapsedTime * speed);
    camera.position.z = radius * Math.cos(elapsedTime * speed);
    camera.position.y = 2; // Set height above the object (look down)

    // Make the camera look at the object
    camera.lookAt(objectPosition[0], objectPosition[0], objectPosition[0]);
  });

  return (
    <>
       <Environment preset='studio'></Environment>
        {/* Light with shadows */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        castShadow
        shadow-mapSize-width={1000}
        shadow-mapSize-height={1000}
        shadow-bias={-0.0001} 
      />
      <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} ref={controlsRef}  enablePan={false} ></OrbitControls>
       
        <Toyota position={[0 , 0, 0]} scale={[0.4, 0.4, 0.4]}></Toyota>
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
      
    </>
  )
}




export default CarCPN ;
