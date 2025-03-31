'use client'

import Image from "next/image"
import { IoCloseOutline, IoSettingsOutline } from "react-icons/io5"
import { LuArrowDownUp, LuWallet } from "react-icons/lu"
import { MdKeyboardArrowDown } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react"
import { IoIosArrowUp, IoIosSearch } from "react-icons/io"
import { tokens } from '@/utils/constant'
import { FaArrowRightArrowLeft } from "react-icons/fa6"


export default function Body() {
    const [isOpen, setIsOpen] = useState(false)
    const [slippagemodal, setSlippagemodal] = useState(false);
    const [currentfield, setcurrentfield] = useState('')
    const [fromToken, setFromToken] = useState('MOVE')
    const [toToken, setToToken] = useState('')
    const [limittime, setLimitTime] = useState(false)
    const [orderDetails, setOrderDetails] = useState(false)
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
                <div className="btn-bg p-1 px-3 rounded-4xl flex items-center ms-auto gap-4 absolute top-[-52px] right-0">
                    <span className="text-primary">0.5%</span>
                    <IoSettingsOutline className="text-xl cursor-pointer hover-primary" onClick={() => setSlippagemodal(true)} />
                </div>
                <div className="bg-black/40 px-5 py-6 rounded-3xl border border-transparent hover:border-zinc-700">
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
                <div className="flex gap-1 mt-1">
                    <div className="bg-black/40 p-5 rounded-3xl w-[60%] border border-transparent hover:border-zinc-700">
                        <p className="text-zinc-400 text-xs flex justify-between">
                            <span>Buy move at rate</span>
                            <span className="text-primary">Use market</span>
                        </p>
                        <div className="input-group flex items-center">
                            <div className="w-[75%]">
                                <input type="text" placeholder="0.0" className="py-2 text-xl w-full focus:outline-none text-grad" />
                            </div>
                            <div className="flex gap-2 justify-end w-[25%]">
                                <button className="bg-black/50 rounded p-1 hover-bg relative flex items-center gap-2 cursor-pointer text-[10px]">
                                    {fromToken}
                                    <span><FaArrowRightArrowLeft className="" /></span>
                                </button>
                            </div>
                        </div>
                        <p className="pt-1 text-xs text-zinc-400">= $0.0234</p>
                    </div>
                    <div className="bg-black/40 p-5 rounded-3xl w-[40%] border border-transparent hover:border-zinc-700 cursor-pointer relative" onClick={() => setLimitTime(!limittime)}>
                        <p className="text-zinc-400 text-xs">Expired</p>
                        <h3 className="text-xl flex items-center justify-between pt-6" ><span>5 Days</span><MdKeyboardArrowDown /></h3>
                            {
                                limittime && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, ease: "ease" }}
                                        className="dropdown p-1 border border-zinc-700/50 rounded-xl bg-black absolute top-30 z-50"
                                    >
                                        <ul className="w-[150px] text-sm">
                                            <li className="btn-bg rounded-xl py-2 px-3 hover:opacity-90">10 Minutes</li>
                                            <li className="btn-bg rounded-xl py-2 px-3 mt-1 hover:opacity-90">1 Hour</li>
                                            <li className="btn-bg rounded-xl py-2 px-3 mt-1 hover:opacity-90">1 Day</li>
                                            <li className="btn-bg rounded-xl py-2 px-3 mt-1 hover:opacity-90">3 Days</li>
                                            <li className="rounded-xl py-2 px-3 mt-1 active card-bg border border-zinc-700/50">5 Days</li>
                                            <li className="btn-bg rounded-xl py-2 px-3 mt-1 hover:opacity-90">30 Days</li>
                                            <li className="btn-bg rounded-xl py-2 px-3 mt-1 hover:opacity-90">90 Days</li>
                                            <li className="btn-bg rounded-xl py-2 px-3 mt-1 hover:opacity-90">Custom</li>
                                        </ul>
                                    </motion.div>
                                )
                            }
                    </div>
                </div>

                <button className="rounded-2xl bg-black p-4 text-xl cursor-pointer w-full mt-3">
                    Connect Wallet
                </button>

                <div className="bg-black/40 rounded-3xl mt-2 overflow-hidden">
                    <p className={`text-zinc-400 text-sm items-center justify-between cursor-pointer p-4 ${orderDetails ? 'hidden' : 'flex'}`} onClick={() => setOrderDetails(!orderDetails)}>
                        <span>1 SUI = 2.38 wUSDT</span>
                        <span><MdKeyboardArrowDown className="text-xl" /></span>
                    </p>
                    <div className={`${orderDetails ? '' : 'hidden'} p-4`}>
                        <h4 className="flex items-center justify-between cursor-pointer" onClick={() => setOrderDetails(!orderDetails)}>
                            <span>Order Details</span> <IoIosArrowUp />
                        </h4>
                        <div className="bg-black/80 py-5 px-3 rounded-xl mt-3">
                            <p className="text-zinc-400 text-sm flex items-center justify-between">
                                <span>Price</span>
                                <span>1 SUI = 2.38 wUSDT</span>
                            </p>
                            <p className="text-zinc-400 text-sm flex items-center justify-between pt-3">
                                <span>Sell Order</span>
                                <span>0 SUI</span>
                            </p>
                            <p className="text-zinc-400 text-sm flex items-center justify-between pt-3">
                                <span>To Buy</span>
                                <span>0 wUSDT</span>
                            </p>
                        </div>
                        <div className="bg-black/80 py-5 px-3 rounded-xl mt-3">
                            <p className="text-zinc-400 text-sm flex items-center justify-between">
                                <span>Expiry</span>
                                <span className="text-primary">5 Days</span>
                            </p>
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