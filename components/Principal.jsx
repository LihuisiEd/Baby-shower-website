'use client'
import { motion } from "framer-motion"
export default function Principal() {
    return (
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
            <div className="relative flex flex-col items-center justify-center p-24 h-screen">
                <div className="text-3xl sm:text-4xl lg:text-5xl text-brown text-center my-4">
                    Celebremos juntos la llegada de
                </div>
                <div className="px-12 sm:px-20 lg:px-40 xl:px-64 py-4 bg-white rounded-full title-hero">
                    <span className="text-blue-300 text-7xl lg:text-8xl xl:text-9xl font-bold">Thomas</span>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/eduardo-lihuisi-476520222/" target="blank">
                        <button className="px-4 py-2 bg-white rounded-full title-github transition duration-150 hover:scale-110 focus:bg-zinc-100">
                            <span className="text-brown text-2xl  font-bold">by LihuisiEd</span>
                        </button>
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                        delay: 2,
                    }}
                    className="absolute bottom-20 bg-white rounded-full animate-bounce p-2 shadow-xl shadow-amber-600/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 text-zinc-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </motion.div>
            </div>
        </motion.div >
    )
}