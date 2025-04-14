'use client'

import Image from "next/image"
import { IoCloseOutline } from "react-icons/io5"
import { LuArrowDownUp, LuWallet } from "react-icons/lu"
import { MdKeyboardArrowDown } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react"
import { IoIosArrowUp, IoIosSearch } from "react-icons/io"
import { tokens } from '@/utils/constant'
import { useWallet } from "@aptos-labs/wallet-adapter-react"


export default function Body() {
    const { connected } = useWallet();
    const [isOpen, setIsOpen] = useState(false)
    const [currentfield, setcurrentfield] = useState('')
    const [fromToken, setFromToken] = useState('MOVE')
    const [toToken, setToToken] = useState('')
    const [fromAmount, setFromAmount] = useState("");
    const [swapDetails, setSwapDetails] = useState(false)
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
    const ModifyTokenOrder = () => {
        setFromToken(toToken)
        setToToken(fromToken)
    }
    return (
        <>
            <div className="w-full card-bg rounded-3xl p-1 relative z-50">
                <div className="field-bg px-4 md:px-5 py-5 md:py-6 rounded-3xl border border-transparent hover:border-white/20">
                    <p className="text-zinc-400 text-sm">You pay</p>
                    <div className="input-group flex items-center">
                        <div className="w-1/2">
                            <input type="text" placeholder="0.0" value={fromAmount} onChange={(e) => setFromAmount(e.target.value)} className="py-2 text-3xl w-full focus:outline-none text-grad" />
                        </div>
                        <div className="flex gap-2 justify-end w-1/2">
                            <button className="px-1 md:px-3 text-sm md:text-base rounded text-primary cursor-pointer hover:opacity-70">max</button>
                            <button className="border border-zinc-700 rounded-3xl py-2 px-2 relative flex items-center gap-2 cursor-pointer text-xs md:text-sm" onClick={() => ShowTokensModal('from')}>
                                <Image src="/media/aptos.jpg" alt="token-image" height={100} width={100} className="h-3 md:h-5 w-3 md:w-5 rounded-full" />
                                {fromToken}
                                <span><MdKeyboardArrowDown className="" /></span>
                            </button>
                        </div>
                    </div>
                    <p className="pt-1 text-xs text-zinc-400 flex gap-2 items-center justify-end"><LuWallet />0.0</p>
                </div>
                <LuArrowDownUp className="text-primary text-2xl card-bg p-1 rounded m-auto cursor-pointer -mt-[10px] -mb-[10px] hover-bg relative z-10" onClick={() => ModifyTokenOrder()} />
                <div className="field-bg px-4 md:px-5 py-5 md:py-6 rounded-3xl border border-transparent hover:border-white/20">
                    <p className="text-zinc-400 text-sm">You receive</p>
                    <div className="input-group flex items-center">
                        <div className="w-1/2">
                            <input type="text" placeholder="0.0" className="py-2 text-3xl w-full focus:outline-none text-grad" />
                        </div>
                        <div className="flex gap-2 justify-end w-1/2">
                            {
                                toToken == '' ?
                                    <button className="rounded-4xl py-2 px-3 text-xs md:text-sm cursor-pointer bg-primary text-black" onClick={() => ShowTokensModal('to')}>
                                        Select Token
                                    </button>
                                    :
                                    <>
                                        <button className="px-1 md:px-3 text-sm md:text-base rounded text-primary cursor-pointer hover:opacity-70">max</button>
                                        <button className="border border-zinc-700 rounded-3xl py-2 px-2 relative flex items-center gap-2 cursor-pointer text-xs md:text-sm" onClick={() => ShowTokensModal('to')}>
                                            <Image src="/media/aptos.jpg" alt="token-image" height={100} width={100} className="h-3 md:h-5 w-3 md:w-5 rounded-full" />
                                            {toToken}
                                            <span><MdKeyboardArrowDown className="" /></span>
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                    <p className="pt-1 text-xs text-zinc-400 flex gap-2 items-center justify-end"><LuWallet /> 0.0</p>
                </div>

                {
                    connected ?
                        <button className="rounded-3xl btn-swap p-3 md:p-4 text-base md:text-xl cursor-pointer w-full mt-3 transition-all">Swap</button>
                        :
                        <button className="rounded-3xl btn-swap p-3 md:p-4 text-base md:text-xl cursor-pointer w-full mt-3 transition-all">Connect Wallet</button>
                }

                <div className="field-bg rounded-3xl mt-2 overflow-hidden">
                    <p className={`text-zinc-400 text-sm items-center justify-between cursor-pointer p-4 ${swapDetails ? 'hidden' : 'flex'}`} onClick={() => setSwapDetails(!swapDetails)}>
                        <span>1 MOVE = 0.3013 USDT</span>
                        <span><MdKeyboardArrowDown className="text-xl" /></span>
                    </p>
                    <div className={`${swapDetails ? '' : 'hidden'} p-4`}>
                        <h4 className="flex items-center justify-between cursor-pointer" onClick={() => setSwapDetails(!swapDetails)}>
                            <span>Order Details</span> <IoIosArrowUp />
                        </h4>
                        <div className="bg-black/80 py-5 px-3 rounded-xl mt-3">
                            <p className="text-zinc-400 text-sm flex items-center justify-between">
                                <span>Price</span>
                                <span>1 MOVE = 0.3013 USDT</span>
                            </p>
                            <p className="text-zinc-400 text-sm flex items-center justify-between pt-3">
                                <span>Swap Order</span>
                                <span>50 Move</span>
                            </p>
                            <p className="text-zinc-400 text-sm flex items-center justify-between pt-3">
                                <span>To Buy</span>
                                <span>16.65 USDT</span>
                            </p>
                        </div>
                        <div className="bg-black/80 py-5 px-3 rounded-xl mt-3">
                            <p className="text-zinc-400 text-sm flex items-center justify-between pt-3">
                                <span>Platform Fee</span>
                                <span>0.2%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tokens Modals */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex items-center justify-center px-5 modal-bg-backdrop">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "ease" }}
                            className="p-4 md:p-6 rounded-2xl relative w-full md:w-[70%] lg:w-[50%] xl:w-[30%] 2xl:w-[25%] border modal-border modal-bg"
                        >
                            <div className="title">
                                <h2 className="text-2xl lg:text-3xl text-center text-grad">Select Token</h2>
                            </div>
                            <div className="content mt-6">
                                <div className="search flex items-center relative px-2 md:px-0">
                                    <IoIosSearch className="absolute left-5 md:left-4 text-primary text-xl" />
                                    <input type="search" placeholder="Search name or paste address" className="w-full rounded-3xl modal-border p-4 py-3 md:py-3 ps-11 md:ps-13 text-sm focus:outline-none" />
                                </div>
                                <ul className="max-h-[50vh] overflow-auto mt-4 flex flex-col gap-1 scrollbar">
                                    {
                                        tokens.map((item, _i) => {
                                            return (
                                                <li key={_i} className="text-base md:text-lg p-2 flex gap-4 items-center justify-between cursor-pointer border-b border-white/4 hover:bg-black/10 rounded transition-all" onClick={() => selectToken(`${item.name}`)}>
                                                    <div className="flex items-center gap-4">
                                                        <Image src={item.token_image} alt="wallet-logo" height={300} width={300} className="h-7 md:h-8 w-7 md:w-8 rounded-full" />
                                                        <div className="text-start">
                                                            <p className="text-sm">{item.name}</p>
                                                            <p className="text-[10px] text-zinc-400">{item.full_name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="text-xs"> {item.balance}</p>
                                                        <p className="text-[10px] text-zinc-400 pt-1"> ~234.00 $</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="absolute top-4 md:top-5 right-4 md:right-5 cursor-pointer text-3xl"><IoCloseOutline />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </>
    )
}