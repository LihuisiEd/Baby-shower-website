'use client'
import Image from "next/image"
import CardFather from "@/components/CardFather"
import { motion } from "framer-motion"

export default function Invitation() {
    return (
        <div className=" w-screen text-center" style={{
            backgroundImage: "url('/stars-bg.png')",
            backgroundRepeat: 'repeat',
        }}>

            <div className="h-screen flex flex-col lg:gap-8 items-center ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                    }}
                    exit={{ opacity: 0 }}
                    className="h-1/5">

                    <div className="text-3xl sm:text-4xl lg:text-5xl text-brown my-2 xl:my-4">
                        Nosotros:
                    </div>
                    <div className="px-20 md:px-40 my-2 xl:my-4 rounded-full">
                        <span className="text-blue text-4xl lg:text-6xl xl:text-9xl font-bold">Mishell y Patryck</span>
                    </div>
                </motion.div>
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
                    className="h-4/5 mt-2"
                >
                    <CardFather />
                </motion.div>
            </div>

        </div>
    )
}