import { useState, useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export function Table(props) {
  const { camera } = useThree()
  const [isFocused, setIsFocused] = useState(false)
  const { scene } = useGLTF('/models/table.glb')
  const modelRef = useRef()
  const zoomSpeed = 0.04
  const prevRotationYRef = useRef(0)

  useEffect(() => {
    modelRef.current.position.z = -2 // Initial zoomed-in position
    modelRef.current.position.y = -1 // Initial zoomed-in position
  }, [])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    // Zoom effect
    if (!isFocused) {
      if (modelRef.current.position.z < 6) {
        const distanceToTarget = 2 - modelRef.current.position.z
        const zoomDistance = distanceToTarget * zoomSpeed

        if (zoomDistance > 0.001) {
          modelRef.current.position.z += zoomDistance
        }
      }

      if (modelRef.current.position.y < 4) {
        const distanceToTarget = -0.5 - modelRef.current.position.y
        const zoomDistance = distanceToTarget * zoomSpeed

        if (zoomDistance > 0.001) {
          modelRef.current.position.y += zoomDistance
        }
      }

      // Rotation effect
      if (!isFocused) {
        modelRef.current.rotation.y = prevRotationYRef.current + time * 0.1
      }
    }

    if (isFocused) {
      prevRotationYRef.current = modelRef.current.rotation.y
    }
  })

  return (
    <mesh ref={modelRef}>
      <primitive onPointerDown={() => setIsFocused(true)} object={scene} {...props} />
    </mesh>
  )
}
