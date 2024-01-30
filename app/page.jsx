"use client"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className=" bg-amber-100 min-h-screen w-screen"
      style={{
        backgroundImage: "url('/Stars.png')",
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'left top',
      }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [0, 1.2, 1],
        }}
        transition={{
          ease: [0.76, 0, 0.24, 1],
          duration: 1.5,
          x: { duration: 1 }
        }}
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center justify-center p-24 h-screen">
          <div className="text-3xl sm:text-4xl lg:text-5xl text-brown text-center my-4">
            Celebremos juntos la llegada de
          </div>
          <div className="px-12 sm:px-20 lg:px-40 xl:px-64 py-4 bg-white rounded-full title-hero">
            <span className="text-blue-300 text-7xl lg:text-8xl xl:text-9xl font-bold">Thomas</span>
          </div>
        </div>
      </motion.div >
    </main>
  );
}
