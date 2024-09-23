import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Lap(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/smol_ame_in_an_upcycled_terrarium_hololiveen.glb' )
  const { actions , names } = useAnimations(animations, group)
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
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="pasokon_1">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.pasokon}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.terrarium1}
                />
              </group>
              <group name="amelia_37" position={[-0.197, 0.901, 0]} rotation={[0, 0.864, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_37.skeleton}
                    morphTargetDictionary={nodes.Object_37.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_37.morphTargetInfluences}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <group name="armies_21" />
                  <group name="armies001_22" />
                  <group name="bode_23" />
                  <group name="bode001_24" />
                  <group name="Cylinder003_25" />
                  <group name="Cylinder004_26" />
                  <group name="eyea_27" />
                  <group name="feets_28" />
                  <group name="feets001_29" />
                  <group name="guitar_30" />
                  <group name="guitar001_31" />
                  <group name="hair_32" />
                  <group name="hairoutline_33" />
                  <group name="mouf_34" />
                  <group name="nogging_35" />
                  <group name="nogging001_36" />
                </group>
              </group>
              <group
                name="isopod002_49"
                position={[0, 0.864, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.073}>
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name="Object_65"
                    geometry={nodes.Object_65.geometry}
                    material={materials.terrarium1}
                    skeleton={nodes.Object_65.skeleton}
                  />
                  <skinnedMesh
                    name="Object_67"
                    geometry={nodes.Object_67.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_67.skeleton}
                  />
                  <group name="isopod_47" />
                  <group name="isopod001_48" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/smol_ame_in_an_upcycled_terrarium_hololiveen.glb')