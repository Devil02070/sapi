'use client'
import { AnimatePresence, motion } from 'framer-motion'
// import Image from 'next/image'
import { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
type SwapProps = {
    CurrentPrice: string;
    SwapOrder: string;
    ToBuy: string;
    isOpen: boolean;
    onClose: () => void;

}
export default function ConfirmSwap({ CurrentPrice, SwapOrder, ToBuy, isOpen, onClose }: SwapProps) {
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const ConfirmSwap = () => {
        setProcessing(true)
        setSuccess(false)
    }
    if (!isOpen) return null;
    return (
        <>
            <AnimatePresence>
                <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex items-end md:items-center justify-center px-0 md:px-5 modal-bg-backdrop">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "ease" }}
                        className="p-4 md:p-6 rounded-t-2xl md:rounded-2xl relative w-full md:w-[70%] lg:w-[50%] xl:w-[30%] border modal-border modal-bg"
                    >
                        <div className="title">
                            <h2 className="text-2xl lg:text-3xl text-center text-grad">Confirm Swap</h2>
                        </div>
                        <div className="content mt-6 text-zinc-300 px-4">
                            <div className="flex justify-between">
                                <p>From</p>
                                <p className='flex gap-2'>
                                    <span>{SwapOrder} </span>
                                    {/* <Image src="/media/aptos.jpg" alt="token-image" height={100} width={100} className="h-3 md:h-5 w-3 md:w-5 rounded-full" /> */}
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p>To</p>
                                <p className='flex gap-2'>
                                    <span>{ToBuy} </span>
                                    {/* <Image src="/media/usdt.svg" alt="token-image" height={100} width={100} className="h-3 md:h-5 w-3 md:w-5 rounded-full" /> */}
                                </p>
                            </div>
                            <p className='text-xs text-zinc-400 mt-4'>Output is estimated. If the price changes by more than 0.5% your transaction will revert.</p>
                            <div className="flex justify-between mt-4">
                                <p>Price</p>
                                <p>{CurrentPrice}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p>Minimum Received</p>
                                <p>{ToBuy}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p>Price Impact</p>
                                <p>~0.01%</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p>Liquidity provider fee</p>
                                <p>0.00002 APT</p>
                            </div>
                            <button className="rounded-2xl border modal-border btn-swap p-3 md:p-4 text-base md:text-xl cursor-pointer w-full mt-6 transition-all" onClick={() => ConfirmSwap()}>Confirm</button>
                        </div>
                        <button className="absolute top-0 right-0 cursor-pointer text-sm rounded-bl-2xl rounded-tr-2xl py-2 px-4 bg-dark hover:opacity-90" onClick={onClose}>Esc</button>
                    </motion.div>
                </div>
            </AnimatePresence>

            {
                processing &&
                <AnimatePresence>
                    <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex items-end md:items-center justify-center px-0 md:px-5 modal-bg-backdrop">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "ease" }}
                            className="p-4 md:p-6 rounded-t-2xl md:rounded-2xl relative w-full md:w-[70%] lg:w-[50%] xl:w-[30%] border modal-border modal-bg"
                        >

                            {
                                success ?
                                    <div className="content mt-10 text-zinc-300 px-4">
                                        <BsCheck2Circle className='text-primary text-7xl m-auto' />
                                        <h2 className='text-2xl text-center mt-10 text-zinc-400'>Swap Successfull!</h2>
                                        <p className='text-center text-sm text-primary pt-6 underline cursor-pointer hover:opacity-90'>View txn. on explorer</p>
                                    </div>
                                    :
                                    <>
                                        <div className="title">
                                            <h2 className="text-2xl lg:text-3xl text-center text-grad">Sign Transaction</h2>
                                        </div>
                                        <div className="content mt-10 text-zinc-300 px-4">
                                            <div className="processing-loader"></div>
                                            <h2 className='text-2xl text-center mt-10 text-zinc-400'>Waiting for confirmation...</h2>
                                            <button className="rounded-2xl border modal-border btn-swap p-3 md:p-4 text-base md:text-xl cursor-pointer w-full mt-6 transition-all" onClick={() => setSuccess(!success)}>demo txn. confirmed</button>
                                        </div>
                                    </>
                            }
                            <button className="absolute top-0 right-0 cursor-pointer text-sm rounded-bl-2xl rounded-tr-2xl py-2 px-4 bg-dark hover:opacity-90" onClick={() => setProcessing(!processing)}>Esc</button>
                        </motion.div>
                    </div>
                </AnimatePresence>
            }
        </>
    )
}