'use client'
import Image from "next/image"
import { motion } from "framer-motion"
export default function Details() {
    return (
        <div className="bg-blue-200 h-screen w-screen" style={{
            backgroundImage: "url('/clouds-bg.png')",
            backgroundRepeat: 'repeat',
        }}>


            <div className="container mx-auto">
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
                    <div className="hidden lg:block relative h-full">
                        <Image
                            width={400}
                            height={400}
                            src={'graficos/nube-jumbo.svg'}
                            className="w-full lg:w-3/5 md:mx-auto"
                        />
                        <div className="absolute inset-0 -top-20 flex flex-col items-center justify-center  text-center">
                            <span className="hidden xl:block text-3xl lg:text-4xl xl:text-5xl text-brown">Te estaremos esperando</span>
                            <span className="text-6xl lg:text-8xl xl:text-9xl font-bold text-brown">No faltes</span>
                        </div>
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
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-11 place-items-center gap-6 mx-4 lg:w-3/5 h-72 my-10 lg:mx-auto">
                        <div className="col-span-1 xl:col-span-3 bg-white w-full h-full rounded-cards">
                            <div className="bg-amber-100 card-t-rounded w-full py-4 text-center">
                                <span className="text-4xl text-brown font-bold">Febrero</span>
                            </div>
                            <div className=" md:w-11/12 py-2 md:py-4 text-center">
                                <span className="text-6xl md:text-8xl text-zinc-400 font-bold">17</span>
                            </div>
                            <div className=" w-full py-4 text-center">
                                <span className="text-4xl text-zinc-400 font-bold">Sábado</span>
                            </div>
                        </div>
                        <div className="md:hidden xl:col-span-4 w-full bg-white rounded-cards">
                            <div className="sm:p-10 overflow-hidden ">
                                <Image
                                    width={400}
                                    height={400}
                                    src={'graficos/Reloj-tiny.svg'}
                                    className=" w-72 mx-auto py-6"
                                />
                            </div>
                        </div>
                        <div className="hidden md:block xl:col-span-4  bg-white rounded-cards">
                            <div className="sm:p-10 overflow-hidden h-300 w-300">
                                <Image
                                    width={400}
                                    height={400}
                                    src={'graficos/Reloj.svg'}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        <div className="relative col-span-1 md:col-span-2 xl:col-span-4 w-full h-fit md:h-full bg-white rounded-cards">
                            <div className="md:h-3/4 flex flex-col w-full text-center">
                                <span className="text-6xl text-brown m-6 font-bold">“Local Social”</span>
                                <span className="text-2xl text-brown mx-4 mb-10 xl:mb-6">Francisco Bolognesi - Cayma</span>
                            </div>
                            <div className="md:h-1/4 w-full  text-center">
                                <button className="absolute mx-auto inset-x-0 -bottom-4 xl:static button-hero text-3xl text-brown w-48 transition duration-200 hover:scale-110">
                                    <a href="https://maps.app.goo.gl/WdVuidguPC43HH4x9" target="blank">Ir al mapa</a></button>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>


        </div>
    )
}