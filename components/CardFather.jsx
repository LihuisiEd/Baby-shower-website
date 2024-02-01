'use client'
import Image from "next/image"
import { motion } from "framer-motion"
export default function CardFather() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center m-4">
            <div className="relative w-full h-36">
                <div className="flex justify-end">
                    <div className="bg-amber-100 text-brown p-4 w-10/12 lg:w-9/12  rounded-3xl text-2xl md:text-4xl ">
                        <div>Estamos muy emocionados por nuestro pequeño.</div>
                    </div>
                </div>
                <div className="absolute bottom-0 bg-amber-100 border-2 border-white rounded-full ">
                    <Image
                        width={100}
                        height={100}
                        src={'iconos/mishell.svg'}
                        className=" p-4"
                    />
                </div>
            </div>

            <div className="relative w-full h-36">
                <div className="flex justify-start">
                    <div className="bg-sky-100 text-blue p-4 w-10/12 lg:w-9/12  rounded-3xl text-2xl md:text-4xl ">
                        <div>Ven a darle la bienvenida a este mundo</div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-sky-100 border-2 border-white rounded-full  ">
                    <Image
                        width={100}
                        height={100}
                        src={'iconos/ronny.svg'}
                        className=" p-4"
                    />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 3,
                }}
                exit={{ opacity: 0 }}
                className="bg-amber-100 w-48 lg:w-96 lg:py-6 p-2 rounded-full">
                    <Image
                        width={115}
                        height={100}
                        src={'/graficos/baby-thomas.svg'}
                        className="md:w-36 lg:w-44 xl:w-48 px-4 mx-auto"
                    />
            </motion.div>
        </div>
    )
}