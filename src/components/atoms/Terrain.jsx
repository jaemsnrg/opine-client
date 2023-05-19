import { useGLTF } from '@react-three/drei'

export function Terrain(props) {
  const { scene } = useGLTF('/models/table-final6.glb')

  return <primitive object={scene} {...props} />
}
