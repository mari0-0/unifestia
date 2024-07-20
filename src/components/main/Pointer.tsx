/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pointer(props) {
  const { nodes, materials } = useGLTF('/mapPointer/source/places_of_interest.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Circle019.geometry} material={materials.red} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019_1.geometry}
        material={materials.white}
      />
    </group>
  )
}

useGLTF.preload('/mapPointer/source/places_of_interest.gltf')