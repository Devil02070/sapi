'use client'
import { paths } from "@/utils/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoRefreshOutline, IoSettingsOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { AiOutlineQuestionCircle } from "react-icons/ai"


export default function TradeTabs() {
    const pathname = usePathname()
    const [slippagemodal, setSlippagemodal] = useState(false);
    return (
        <>
            <div className="flex justify-between mb-4 md:relative">
                <div className={`w-fit flex gap-2 btn-bg  p-1 rounded-4xl relative z-50 `}>
                    {
                        paths.map((path, index) => (
                            <Link href={`/trade/${path.to}`} className={`tab text-primary py-1 px-3 md:px-5 text-sm rounded-4xl btn-bg hover-bg ${pathname === `/trade/${path.to}` ? "active" : ""}`} key={`trade-path-${index}`}>{path.name}</Link>
                        ))
                    }
                </div>
                <div className="flex gap-2">
                    <div className="rounded-full flex items-center ms-auto text-xl cursor-pointer">
                        <IoRefreshOutline />
                    </div>
                    <div className="btn-bg p-1 px-3 rounded-4xl flex items-center ms-auto gap-2 md:gap-4">
                        <span className="text-sm text-primary">0.5%</span>
                        <IoSettingsOutline className="text-sm md:text-xl cursor-pointer hover-primary" onClick={() => setSlippagemodal(!slippagemodal)} />
                    </div>
                </div>

                {/* Slippage Modal */}
                {slippagemodal &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "ease" }}
                        // className="p-4 rounded-2xl btn-bg absolute w-fit z-60 right-0 md:-right-20 top-10 modal-border"
                        className="p-4 rounded-t-2xl md:rounded-2xl btn-bg fixed md:absolute w-fit z-60 right-0 bottom-0 md:-right-20 md:-bottom-40 modal-border"
                    >
                        <div className="title relative group w-fit">
                            <h2 className="text-xl text-grad flex gap-2 items-center">Transaction Setting
                                <AiOutlineQuestionCircle className="text-zinc-400 cursor-pointer" />
                            </h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute left-1/2 -translate-x-1/2 top-9 z-50 hidden group-hover:block rounded-2xl btn-bg p-3 modal-border text-zinc-400 text-xs w-64"
                            >
                                Slippage tolerance is the maximum % you&apos;re willing to lose due to price changes while swapping.
                            </motion.div>
                        </div>
                        <div className="content pt-3">
                            <p className="text-xs text-zinc-400">Slippage tolerance:</p>
                            <div className="flex flex-wrap md:flex-nowrap gap-2 items-center mt-2">
                                <span className="py-2 px-4 rounded-3xl text-sm bg-dark text-primary hover-bg cursor-pointer">0.1%</span>
                                <span className="py-2 px-4 rounded-3xl text-sm bg-dark text-primary hover-bg cursor-pointer">0.5%</span>
                                <span className="py-2 px-4 rounded-3xl text-sm bg-dark text-primary hover-bg cursor-pointer">1.0%</span>
                                <input type="text" placeholder="custom (0.08%)" className="w-full modal-border rounded-xl p-3 text-sm focus:outline-none" />
                            </div>
                        </div>
                        {/* <button onClick={() => setSlippagemodal(!slippagemodal)} className="absolute top-5 right-5 cursor-pointer text-3xl"><IoCloseOutline /></button> */}
                        <button onClick={() => setSlippagemodal(!slippagemodal)} className="absolute top-5 right-5 cursor-pointer text-sm bg-dark p-1 rounded px-2">Esc</button>
                    </motion.div>
                }
            </div>
        </>
    )
}
