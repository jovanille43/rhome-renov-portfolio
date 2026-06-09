import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'

function RotatingCube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#2563eb"
        metalness={0.8}
        roughness={0.2}
        emissive="#1e40af"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#3b82f6" />
      <RotatingCube />
      <OrbitControls autoRotate autoRotateSpeed={3} />
    </>
  )
}

export default function Hero() {
  return (
    <section id="accueil" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent"
        >
          R'Home Renov
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Rénovation d'excellence en Haute-Loire
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-400 mb-10"
        >
          Salles de bain • Plomberie • Chauffage
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer"
        >
          Découvrir nos services
        </motion.button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e27] z-5"></div>
    </section>
  )
}