import { Canvas } from '@react-three/fiber'
import './App.css'
import './style.css'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import { Bloom } from '@react-three/postprocessing'

function App() {

  return (
    <Canvas camera={{ fov: 20 }}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <Bloom
        intensity={11.0}
        luminanceThreshold={0}
        luminanceSmoothing={0}
      />
    </Canvas>
  )
}

export default App
