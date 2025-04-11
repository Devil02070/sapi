'use client'
import { paths } from "@/utils/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoCloseOutline, IoSettingsOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { AiOutlineQuestionCircle } from "react-icons/ai"


export default function TradeTabs() {
    const pathname = usePathname()
    const [slippagemodal, setSlippagemodal] = useState(false);
    return (
        <>
            <div className="flex justify-between mb-4 relative">
                <div className={`w-fit flex gap-2 btn-bg  p-1 rounded-4xl relative z-50 `}>
                    {
                        paths.map((path, index) => (
                            <Link href={`/trade/${path.to}`} className={`tab text-primary py-1 px-3 md:px-5 text-sm rounded-4xl btn-bg hover-bg ${pathname === `/trade/${path.to}` ? "active" : ""}`} key={`trade-path-${index}`}>{path.name}</Link>
                        ))
                    }
                </div>
                <div className="btn-bg p-1 px-3 rounded-4xl flex items-center ms-auto gap-2 md:gap-4">
                    <span className="text-sm text-primary">0.5%</span>
                    <IoSettingsOutline className="text-sm md:text-xl cursor-pointer hover-primary" onClick={() => setSlippagemodal(!slippagemodal)} />
                </div>
                {
                    slippagemodal &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "ease" }}
                        className="p-4 rounded-2xl btn-bg absolute w-fit z-60 border border-white/20 right-0 md:-right-20 top-10"
                    >
                        <div className="title">
                            <h2 className="text-xl text-grad flex gap-2 items-center ">Transaction Setting <AiOutlineQuestionCircle className="text-zinc-400"/></h2>
                        </div>
                        <div className="content pt-3">
                            <p className="text-xs text-zinc-400">Slippage tolerance:</p>
                            <div className="flex flex-wrap md:flex-nowrap gap-2 items-center mt-2">
                                <span className="py-2 px-4 rounded-3xl text-sm bg-dark text-primary hover-bg cursor-pointer">0.1%</span>
                                <span className="py-2 px-4 rounded-3xl text-sm bg-dark text-primary hover-bg cursor-pointer">0.5%</span>
                                <span className="py-2 px-4 rounded-3xl text-sm bg-dark text-primary hover-bg cursor-pointer">1.0%</span>
                                <input type="text" placeholder="custom (0.08%)" className="w-full border border-white/20 rounded-xl p-3 text-sm focus:outline-none" />
                            </div>
                        </div>
                        <button onClick={() => setSlippagemodal(!slippagemodal)} className="absolute top-5 right-5 cursor-pointer text-3xl"><IoCloseOutline />
                        </button>
                    </motion.div>
                }
            </div>

            {/* Slippage Modal */}
            {/* <AnimatePresence>
                {slippagemodal && (
                    <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex items-center justify-center px-5 modal-bg" onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setSlippagemodal(!slippagemodal);
                        }
                    }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "ease" }}
                            className="p-6 rounded-2xl btn-bg relative w-full md:w-[70%] lg:w-[50%] xl:w-[30%] 2xl:w-[25%]"
                        >
                            <div className="title">
                                <h2 className="text-2xl lg:text-3xl text-center text-grad">Transaction Setting</h2>
                            </div>
                            <div className="content mt-6 sm:mt-10 px-4 md:px-0">
                                <p>Slippage tolerance</p>
                                <div className="flex flex-wrap md:flex-nowrap gap-2 items-center mt-2">
                                    <span className="py-2 px-6 rounded-4xl bg-dark text-primary hover-bg cursor-pointer">0.1%</span>
                                    <span className="py-2 px-6 rounded-4xl bg-dark text-primary hover-bg cursor-pointer">0.5%</span>
                                    <span className="py-2 px-6 rounded-4xl bg-dark text-primary hover-bg cursor-pointer">1.0%</span>
                                    <input type="text" placeholder="custom (0.08%)" className="w-full border border-zinc-700 rounded-xl p-3 text-sm focus:outline-none" />
                                </div>
                            </div>
                            <button onClick={() => setSlippagemodal(!slippagemodal)} className="absolute top-5 right-5 cursor-pointer text-3xl"><IoCloseOutline />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence> */}
        </>
    )
}
