/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 trunks.gltf --transform
Author: martinjario (https://sketchfab.com/martinjario)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/future-trunks-dbz-973d2900de224a7395cc57e0ed51ac46
Title: Future trunks DBZ
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/trunks-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[-0.427, -0.504, 1.017]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.PaletteMaterial002} position={[-0.427, -0.504, 1.017]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/trunks-transformed.glb')
