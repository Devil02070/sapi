'use client'

import { paths } from "@/utils/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoCloseOutline, IoSettingsOutline } from "react-icons/io5"
import { motion, AnimatePresence } from 'framer-motion'


export default function TradeTabs() {
    const pathname = usePathname()
    const [slippagemodal, setSlippagemodal] = useState(false);
    return (
        <>
            <div className="flex justify-between mb-4">
                <div className={`flex gap-2 btn-bg w-fit p-1 rounded-4xl relative z-50 `}>
                    {
                        paths.map((path, index) => (
                            <Link href={`/trade/${path.to}`} className={`tab text-primary py-1 px-5 text-sm rounded-4xl btn-bg hover-bg ${pathname === `/trade/${path.to}` ? "active" : ""}`} key={`trade-path-${index}`}>{path.name}</Link>
                        ))
                    }
                </div>
                <div className="btn-bg p-1 px-3 rounded-4xl flex items-center ms-auto gap-4">
                    <span className="text-primary">0.5%</span>
                    <IoSettingsOutline className="text-xl cursor-pointer hover-primary" onClick={() => setSlippagemodal(true)} />
                </div>
            </div>

            {/* Slippage Modal */}
            <AnimatePresence>
                {slippagemodal && (
                    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center px-5 modal-bg">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "ease" }}
                            className="py-8 sm:p-10 rounded-2xl bg-black relative w-full md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
                        >
                            <div className="title">
                                <h2 className="text-2xl lg:text-3xl text-center text-grad">
                                    Transaction Setting
                                </h2>
                            </div>
                            <div className="content mt-8 sm:mt-10 px-4 md:px-0">
                                <p>Slippage tolerance</p>
                                <div className="flex flex-wrap md:flex-nowrap gap-3 items-center mt-2">
                                    <span className="py-3 px-7 rounded-4xl bg-dark text-primary hover-bg cursor-pointer">0.1%</span>
                                    <span className="py-3 px-7 rounded-4xl bg-dark text-primary hover-bg cursor-pointer">0.5%</span>
                                    <span className="py-3 px-7 rounded-4xl bg-dark text-primary hover-bg cursor-pointer">1.0%</span>
                                    <input type="text" placeholder="custom (0.08%)" className="w-full border border-zinc-700 rounded p-4 text-sm focus:outline-none" />
                                </div>
                            </div>
                            <button onClick={() => setSlippagemodal(false)} className="absolute top-5 right-5 cursor-pointer text-3xl"><IoCloseOutline />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
