
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'



export function Toyota(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/toyota_chaser_tourerv.glb')
  const { actions, names } = useAnimations(animations, group)
  const [animationPlaying, setAnimationPlaying] = useState(false);

  useEffect(() => {
    // Play the first animation by default when the component mounts
    if (actions && names.length > 0 && !animationPlaying) {
      actions[names[0]].play(); // Plays the first animation in the file
      setAnimationPlaying(true);
    }
  }, [actions, names, animationPlaying]);
  


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.011}>
          <group name="Toyota_Chaser_TourerVfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="ToyotaChaser_obj">
                  <group name="DoorRR_0_006" position={[-84.62, 69.699, -31.536]}>
                    <mesh
                      name="DoorRR_0_006_Paintjob_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRR_0_006_Paintjob_0.geometry}
                      material={materials.Paintjob}
                    />
                    <mesh
                      name="DoorRR_0_006_Black_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRR_0_006_Black_0.geometry}
                      material={materials.Black}
                    />
                    <mesh
                      name="DoorRR_0_006_Windows_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRR_0_006_Windows_0.geometry}
                      material={materials.Windows}
                    />
                    <mesh
                      name="DoorRR_0_006_Interior_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRR_0_006_Interior_0.geometry}
                      material={materials.Interior}
                    />
                  </group>
                  <group name="DoorRL_0_005" position={[84.274, 69.699, -31.536]}>
                    <mesh
                      name="DoorRL_0_005_Paintjob_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRL_0_005_Paintjob_0.geometry}
                      material={materials.Paintjob}
                    />
                    <mesh
                      name="DoorRL_0_005_Black_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRL_0_005_Black_0.geometry}
                      material={materials.Black}
                    />
                    <mesh
                      name="DoorRL_0_005_Windows_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRL_0_005_Windows_0.geometry}
                      material={materials.Windows}
                    />
                    <mesh
                      name="DoorRL_0_005_Interior_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorRL_0_005_Interior_0.geometry}
                      material={materials.Interior}
                    />
                  </group>
                  <group name="Hood_0_004" position={[0, 93.114, 77.504]}>
                    <mesh
                      name="Hood_0_004_Chrome_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Hood_0_004_Chrome_0.geometry}
                      material={materials.Chrome}
                    />
                    <mesh
                      name="Hood_0_004_Paintjob_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Hood_0_004_Paintjob_0.geometry}
                      material={materials.Paintjob}
                    />
                    <mesh
                      name="Hood_0_004_Black_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Hood_0_004_Black_0.geometry}
                      material={materials.Black}
                    />
                  </group>
                  <group name="Trunk_0_003" position={[0, 98.967, -175.542]}>
                    <mesh
                      name="Trunk_0_003_Chrome_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Trunk_0_003_Chrome_0.geometry}
                      material={materials.Chrome}
                    />
                    <mesh
                      name="Trunk_0_003_Paintjob_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Trunk_0_003_Paintjob_0.geometry}
                      material={materials.Paintjob}
                    />
                  </group>
                  <group name="DoorFR_0_002" position={[-84.62, 67.154, 75.368]}>
                    <mesh
                      name="DoorFR_0_002_Chrome_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFR_0_002_Chrome_0.geometry}
                      material={materials.Chrome}
                    />
                    <mesh
                      name="DoorFR_0_002_Paintjob_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFR_0_002_Paintjob_0.geometry}
                      material={materials.Paintjob}
                    />
                    <mesh
                      name="DoorFR_0_002_Black_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFR_0_002_Black_0.geometry}
                      material={materials.Black}
                    />
                    <mesh
                      name="DoorFR_0_002_Windows_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFR_0_002_Windows_0.geometry}
                      material={materials.Windows}
                    />
                    <mesh
                      name="DoorFR_0_002_Interior_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFR_0_002_Interior_0.geometry}
                      material={materials.Interior}
                    />
                  </group>
                  <group name="DoorFL_0_001" position={[84.274, 67.154, 75.368]}>
                    <mesh
                      name="DoorFL_0_001_Chrome_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFL_0_001_Chrome_0.geometry}
                      material={materials.Chrome}
                    />
                    <mesh
                      name="DoorFL_0_001_Paintjob_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFL_0_001_Paintjob_0.geometry}
                      material={materials.Paintjob}
                    />
                    <mesh
                      name="DoorFL_0_001_Black_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFL_0_001_Black_0.geometry}
                      material={materials.Black}
                    />
                    <mesh
                      name="DoorFL_0_001_Windows_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFL_0_001_Windows_0.geometry}
                      material={materials.Windows}
                    />
                    <mesh
                      name="DoorFL_0_001_Interior_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.DoorFL_0_001_Interior_0.geometry}
                      material={materials.Interior}
                    />
                  </group>
                  <group name="Chaser_0">
                    <mesh
                      name="Chaser_0_Rim_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Rim_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      name="Chaser_0_BlueHose_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_BlueHose_0.geometry}
                      material={materials.BlueHose}
                    />
                    <mesh
                      name="Chaser_0_Radiator_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Radiator_0.geometry}
                      material={materials.Radiator}
                    />
                    <mesh
                      name="Chaser_0_Chrome_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Chrome_0.geometry}
                      material={materials.Chrome}
                    />
                    <mesh
                      name="Chaser_0_NOS_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_NOS_0.geometry}
                      material={materials.material_8}
                    />
                    <mesh
                      name="Chaser_0_Tire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Tire_0.geometry}
                      material={materials.Tire}
                    />
                    <mesh
                      name="Chaser_0_Grille_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Grille_0.geometry}
                      material={materials.Grille}
                    />
                    <mesh
                      name="Chaser_0_Paintjob_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Paintjob_0.geometry}
                      material={materials.Paintjob}
                    />
                    <mesh
                      name="Chaser_0_Glass_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Glass_0.geometry}
                      material={materials.Glass}
                    />
                    <mesh
                      name="Chaser_0_Black_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Black_0.geometry}
                      material={materials.Black}
                    />
                    <mesh
                      name="Chaser_0_Windows_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Windows_0.geometry}
                      material={materials.Windows}
                    />
                    <mesh
                      name="Chaser_0_Klotz_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Klotz_0.geometry}
                      material={materials.Klotz}
                    />
                    <mesh
                      name="Chaser_0_ENGINE_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_ENGINE_0.geometry}
                      material={materials.ENGINE}
                    />
                    <mesh
                      name="Chaser_0_Disc_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Disc_0.geometry}
                      material={materials.Disc}
                    />
                    <mesh
                      name="Chaser_0_Seat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Seat_0.geometry}
                      material={materials.Seat}
                    />
                    <mesh
                      name="Chaser_0_Lights_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Lights_0.geometry}
                      material={materials.Lights}
                    />
                    <mesh
                      name="Chaser_0_Interior_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Interior_0.geometry}
                      material={materials.Interior}
                    />
                    <mesh
                      name="Chaser_0_Steeringwheel_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chaser_0_Steeringwheel_0.geometry}
                      material={materials.Steeringwheel}
                    />
                    
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/toyota_chaser_tourerv.glb')