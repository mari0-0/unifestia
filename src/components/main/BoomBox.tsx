import { useGLTF } from '@react-three/drei'

export default function BoomBox(props) {
  const { nodes, materials } = useGLTF('/model/boombox_1k.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane095.geometry}
        material={materials.boombox}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane095_1.geometry}
        material={materials.boombox_speakers}
      />
    </group>
  )
}

useGLTF.preload('/model/boombox_1k.gltf')