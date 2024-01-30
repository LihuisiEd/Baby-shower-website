'use client'
import Link from "next/link"
import { motion } from "framer-motion";
export default function NavBar() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 2,
                delay: 2,
            }}
            exit={{ opacity: 0 }}
            className="absolute mb-14 bottom-0 flex gap-6 justify-center w-72 lg:w-96 lg:h-28 text-center text-zinc-400"
        >
            <Link href="/" className="text-3xl lg:text-5xl w-full transition duration-200 hover:scale-110">
                <div className="buttons-navigation font-bold p-3 lg:p-6">
                    1
                </div>
            </Link>
            <Link href="/invitation" className="text-3xl lg:text-5xl w-full transition duration-200 hover:scale-110">
                <div className="buttons-navigation font-bold p-3 lg:p-6">
                    2
                </div>
            </Link>
            <Link href="/details" className="text-3xl lg:text-5xl w-full transition duration-200 hover:scale-110">
                <div className="buttons-navigation font-bold p-3 lg:p-6 ">
                    3
                </div>
            </Link>

        </motion.div>
    )
}