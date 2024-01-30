'use client'
import Image from "next/image"
import { motion } from "framer-motion"

export default function Invitation() {
    return (
        <div className="h-full w-screen text-center" style={{
            backgroundImage: "url('/stars-bg.png')",
            backgroundRepeat: 'repeat',
        }}>

            <div className="flex flex-col lg:gap-8 items-center ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                    }}
                    exit={{ opacity: 0 }}>

                    <div className="text-3xl sm:text-4xl lg:text-5xl text-brown my-4">
                        Nosotros:
                    </div>
                    <div className="px-20 md:px-40 py-4  rounded-full">
                        <span className="text-blue text-6xl lg:text-8xl xl:text-9xl font-bold">Mishell y Patryck</span>
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
                    className="grid justify-items-center md:grid-cols-4 m-4 gap-4 items-center md:w-2/3 xl:w-1/3"
                >

                    <div className="hidden md:block col-span-1 bg-amber-100 justify-self-center  p-6  rounded-full">
                        <Image
                            width={100}
                            height={100}
                            src={'iconos/mishell.svg'}
                            className="lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-3 bg-amber-100 p-10 m-0 md:m-0 rounded-3xl lg:rounded-full w-72 md:w-full text-3xl md:text-4xl">
                        Estamos muy emocionados por nuestro pequeño.
                    </div>
                    <div className="col-span-1 md:col-span-3 bg-sky-100 p-10 m-0 md:m-0 rounded-3xl lg:rounded-full w-72 md:w-full text-3xl md:text-4xl">
                        Ven a darle la bienvenida a este mundo
                    </div>
                    <div className="hidden md:block lg:col-span-1 bg-sky-100 justify-self-center p-6  rounded-full">
                        <Image
                            width={100}
                            height={100}
                            src={'iconos/ronny.svg'}
                            className="lg:h-full lg:w-full"
                        />
                    </div>


                </motion.div>
            </div>

        </div>
    )
}