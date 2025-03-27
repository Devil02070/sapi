'use client'

import Image from "next/image"
import { IoCloseOutline, IoSettingsOutline } from "react-icons/io5"
import { LuArrowDownUp } from "react-icons/lu"
import { MdKeyboardArrowDown } from "react-icons/md"
import Aurora from "@/components/ui/Aurora"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react"
import { IoIosSearch } from "react-icons/io"


export default function Body() {
    const [isOpen, setIsOpen] = useState(false)
    const [slippagemodal, setSlippagemodal] = useState(false);
    const [currentfield, setcurrentfield] = useState('')
    const [fromToken, setFromToken] = useState('MOVE')
    const [toToken, setToToken] = useState('')
    const ShowTokensModal = (modaltype: string) => {
        if (modaltype == "from") {
            setcurrentfield('from')
            setIsOpen(true)
        } else {
            setcurrentfield('to')
            setIsOpen(true)
        }
    }

    const selectToken = (token: string) => {
        if (currentfield == "from") {
            setFromToken(token)
            setIsOpen(false)
        } else {
            setToToken(token)
            setIsOpen(false)
        }
    }
    const tokens = [
        {
            id: 1,
            name: 'MOVE',
            token_image: '/media/movement.jpg',
            full_name: 'Movement',
            balance: 500
        },
        {
            id: 2,
            name: 'SUPRA',
            token_image: '/media/movement.jpg',
            full_name: 'Supra',
            balance: 400
        },
        {
            id: 3,
            name: 'APT',
            token_image: '/media/movement.jpg',
            full_name: 'Aptos',
            balance: 45
        }, {
            id: 4,
            name: 'LGND',
            token_image: '/media/movement.jpg',
            full_name: 'Legend',
            balance: 34567
        }
    ]
    return (
        <>
            <section className="py-10 md:py-20">
                <div className="container m-auto px-5">
                    <div className="w-full md:w-[60%] lg:w-[40%] m-auto">
                        <div className="title flex justify-between items-center">
                            <h2 className="text-3xl md:text-6xl text-grad">SWAP</h2>
                            <IoSettingsOutline className="text-2xl md:text-4xl" onClick={() => setSlippagemodal(true)} />
                        </div>
                        <div className="mt-4 md:mt-6 border border-zinc-700 p-5 rounded-lg">
                            <p className="pb-1">From</p>
                            <div className="input-group flex items-center">
                                <div className="w-[60%]">
                                    <input type="text" placeholder="0.0" className="py-4 text-2xl w-full focus:outline-none text-grad" />
                                </div>
                                <div className="flex gap-2 justify-end w-[40%]">
                                    <button className="px-2 md:px-4 rounded text-primary cursor-pointer hover:opacity-70">Max</button>
                                    <button className="border border-zinc-700 rounded-lg py-4 px-3 flex items-center gap-2 cursor-pointer" onClick={() => ShowTokensModal('from')}>
                                        <Image src="/media/movement.jpg" alt="token-image" height={100} width={100} className="h-[20px] w-[20px] rounded-full" />
                                        {fromToken}
                                        <MdKeyboardArrowDown className="ms-4" />
                                    </button>
                                </div>
                            </div>
                            <p className="pt-1 text-xs text-zinc-400">Balance: 0.0</p>
                        </div>
                        <LuArrowDownUp className="text-primary text-2xl md:text-3xl m-auto mt-3 md:mt-4 cursor-pointer" />
                        <div className="mt-3 md:mt-4 border border-zinc-700 p-5 rounded-lg">
                            <p className="pb-1">To</p>
                            <div className="input-group flex items-center">
                                <div className="w-[60%]">
                                    <input type="text" placeholder="0.0" className="py-4 text-2xl w-full focus:outline-none text-grad" />
                                </div>
                                <div className="flex gap-2 justify-end w-[40%]">

                                    {
                                        toToken == '' ?
                                            <button className="rounded-lg py-3 md:py-4 px-3 text-xs md:text-base cursor-pointer bg-primary text-black/90 font-bold" onClick={() => ShowTokensModal('to')}>
                                                Select Token
                                            </button>
                                            :
                                            <>
                                                <button className="px-2 md:px-4 rounded text-primary cursor-pointer hover:opacity-70">Max</button>
                                                <button className="border border-zinc-700 rounded-lg py-4 px-3 flex items-center gap-2 cursor-pointer" onClick={() => ShowTokensModal('to')}>
                                                    <Image src="/media/movement.jpg" alt="token-image" height={100} width={100} className="h-[20px] w-[20px] rounded-full" />
                                                    {toToken}
                                                    <MdKeyboardArrowDown className="ms-4" />
                                                </button>
                                            </>
                                    }
                                </div>
                            </div>
                            <p className="pt-1 text-xs text-zinc-400">Balance: 0.0</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tokens Modals */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center px-5 modal-bg">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "ease" }}
                            className="py-8 sm:p-10 rounded-2xl bg-black/90 relative w-full md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
                        >
                            <div className="title">
                                <h2 className="text-2xl lg:text-3xl text-center text-grad">Select Token</h2>
                            </div>
                            <div className="content mt-8 sm:mt-10">
                                <div className="search flex items-center relative px-2 md:px-0">
                                    <IoIosSearch className="absolute left-4 text-primary text-xl" />
                                    <input type="search" placeholder="Search name or paste address" className="w-full border border-zinc-700 rounded p-4 ps-13 text-sm focus:outline-none" />
                                </div>
                                <ul className="max-h-[50vh] overflow-auto scrollbar-hidden mt-4">
                                    {
                                        tokens.map((item, _i) => {
                                            return (
                                                <li key={item.id} className="text-lg py-3 px-2 text-center hover:bg-zinc-400/10 flex gap-4 items-center justify-between" onClick={() => selectToken(`${item.name}`)}>
                                                    <span className="flex items-center gap-4">
                                                        <Image src={item.token_image} alt="wallet-logo" height={300} width={300} className="h-[40px] w-[40px] rounded-full" />
                                                        <div className="text-start">
                                                            <p className="text-zinc-200">{item.name}</p>
                                                            <p className="text-xs text-zinc-400">{item.full_name}</p>
                                                        </div>
                                                    </span>
                                                    <span className="text-xs p-1 text-zinc-400">{item.balance}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 cursor-pointer text-3xl"><IoCloseOutline />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

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



            <Aurora
                colorStops={["#1ea59a", "#FEBF32", "#2d82e4"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.7}
            />
        </>
    )
}