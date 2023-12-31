/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 burger.gltf --transform
Author: Ehsan Abbasi (https://sketchfab.com/EhsanAbbasi)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/back-yard-burgers-classic-burger-6e13942ff76d4129b06e097cdd060adb
Title: Back Yard Burgers - Classic Burger
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/burger-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bread2B_Bread2A_0.geometry} material={materials.Bread2A} position={[2.067, -5.249, 13.287]} rotation={[2.57, -0.11, -1.426]} scale={[1.165, 1.452, 1.552]} />
      <mesh geometry={nodes.Tomato003_TomatoA_0.geometry} material={materials.TomatoA} position={[-5.73, -4.111, -3.559]} rotation={[-1.553, 0.009, 3.004]} scale={0.646} />
      <mesh geometry={nodes.Tomato003_Tomato_0.geometry} material={materials.Tomato} position={[-5.73, -4.111, -3.559]} rotation={[-1.553, 0.009, 3.004]} scale={0.646} />
      <mesh geometry={nodes.Cheese2_Cheese_0.geometry} material={materials.Cheese} position={[0.139, -4.855, 1.623]} rotation={[-Math.PI / 2, 0, -1.309]} />
      <mesh geometry={nodes.Patty2_PattyA_0.geometry} material={materials.PattyA} position={[0.41, -7.515, 1.216]} rotation={[-Math.PI / 2, 0, -1.309]} scale={1.009} />
      <mesh geometry={nodes.Patty2_PattyB_0.geometry} material={materials.PattyB} position={[0.41, -7.515, 1.216]} rotation={[-Math.PI / 2, 0, -1.309]} scale={1.009} />
      <mesh geometry={nodes.Cabbage2_Cabbage2_0.geometry} material={materials.Cabbage2} position={[17.57, -26.271, 48.08]} rotation={[0.848, -1.245, -1.139]} scale={2.664} />
    </group>
  )
}

useGLTF.preload('/burger-transformed.glb')
