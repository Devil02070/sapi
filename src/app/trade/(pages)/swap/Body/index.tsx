'use client'

import Image from "next/image"
import { IoCloseOutline} from "react-icons/io5"
import { LuArrowDownUp, LuWallet } from "react-icons/lu"
import { MdKeyboardArrowDown } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react"
import { IoIosSearch } from "react-icons/io"
import { tokens } from '@/utils/constant'


export default function Body() {
    const [isOpen, setIsOpen] = useState(false)
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
    return (
        <>

            <div className="w-full card-bg rounded-3xl p-1 relative z-50">
                <div className="bg-black/40 px-5 py-6 rounded-3xl">
                    <p className="text-zinc-400 text-sm">You pay</p>
                    <div className="input-group flex items-center">
                        <div className="w-[50%]">
                            <input type="text" placeholder="0.0" className="py-2 text-3xl w-full focus:outline-none text-grad" />
                        </div>
                        <div className="flex gap-2 justify-end w-[50%]">
                            <button className="px-2 md:px-3 rounded text-primary cursor-pointer hover:opacity-70">Max</button>
                            <button className="border border-zinc-700 rounded-4xl py-2 px-2 relative flex items-center gap-2 cursor-pointer text-sm" onClick={() => ShowTokensModal('from')}>
                                <Image src="/media/movement.jpg" alt="token-image" height={100} width={100} className="h-[20px] w-[20px] rounded-full" />
                                {fromToken}
                                <span><MdKeyboardArrowDown className="" /></span>
                            </button>
                        </div>
                    </div>
                    <p className="pt-1 text-xs text-zinc-400 flex gap-2 items-center justify-end"><LuWallet /> 0.0</p>
                </div>
                <LuArrowDownUp className="text-primary text-2xl bg-black p-1 rounded m-auto cursor-pointer mt-[-10px] mb-[-10px] hover-bg relative z-10" />
                <div className="bg-black/40 px-5 py-6 rounded-3xl">
                    <p className="text-zinc-400 text-sm">You receive</p>
                    <div className="input-group flex items-center">
                        <div className="w-[50%]">
                            <input type="text" placeholder="0.0" className="py-2 text-3xl w-full focus:outline-none text-grad" />
                        </div>
                        <div className="flex gap-2 justify-end w-[50%]">

                            {
                                toToken == '' ?
                                    <button className="rounded-4xl py-2 px-3 text-xs md:text-sm cursor-pointer bg-primary text-black" onClick={() => ShowTokensModal('to')}>
                                        Select Token
                                    </button>
                                    :
                                    <>
                                        <button className="px-2 md:px-3 rounded text-primary cursor-pointer hover:opacity-70">Max</button>
                                        <button className="border border-zinc-700 rounded-lg p-3 relative flex items-center gap-2 cursor-pointer text-sm" onClick={() => ShowTokensModal('to')}>
                                            <Image src="/media/movement.jpg" alt="token-image" height={100} width={100} className="h-[20px] w-[20px] rounded-full" />
                                            {toToken}
                                            <span><MdKeyboardArrowDown className="" /></span>
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                    <p className="pt-1 text-xs text-zinc-400 flex gap-2 items-center justify-end"><LuWallet /> 0.0</p>
                </div>

                <button className="rounded-3xl bg-black p-4 text-xl cursor-pointer w-full mt-3" onClick={() => ShowTokensModal('to')}>
                    Swap
                </button>
            </div>

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
                                                <li key={_i} className="text-lg py-3 px-2 text-center hover:bg-zinc-400/10 flex gap-4 items-center justify-between" onClick={() => selectToken(`${item.name}`)}>
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

        </>
    )
}