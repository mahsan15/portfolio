import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';


export const Cube = () => {
    const textRef = useRef();
    useFrame(state=>textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2)
  return (
    <mesh>
    <boxGeometry args={[2,2,2]}/>
    <meshStandardMaterial color="red">
        <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0,0,3]}/>
            <color attach="background" args={["pink"]}/>
            <Text ref={textRef} fontSize={1} color="#555">
                Heyy!
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
</mesh>
  )
}

export default Cube;