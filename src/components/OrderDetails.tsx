'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
interface OrderProps {
    CurrentPrice: string
    SwapOrder: string
    ToBuy: string
    PlatformFee: string
}
export default function OrderDetails({ CurrentPrice, SwapOrder, ToBuy, PlatformFee }: OrderProps) {
    const [swapDetails, setSwapDetails] = useState(false)
    return (
        <>
            {CurrentPrice &&
                <div className="field-bg rounded-3xl mt-2 overflow-hidden">
                    <p className="flex items-center justify-between cursor-pointer p-4" onClick={() => setSwapDetails(!swapDetails)}>
                        {swapDetails ?
                            <span className="">Order Details</span>
                            :
                            <span className="text-zinc-400 text-sm">{CurrentPrice}</span>
                        }
                        <motion.span
                            animate={{ rotate: swapDetails ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <IoIosArrowUp />
                        </motion.span>
                    </p>
                    <AnimatePresence initial={false}>
                        {swapDetails && (
                            <motion.div
                                className="p-4 pt-0"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="bg-black/80 py-5 px-3 rounded-xl">
                                    <p className="text-zinc-400 text-sm flex items-center justify-between">
                                        <span>Price</span>
                                        <span>{CurrentPrice}</span>
                                    </p>
                                    <p className="text-zinc-400 text-sm flex items-center justify-between pt-3">
                                        <span>Swap Order</span>
                                        <span>{SwapOrder ? SwapOrder : '---'}</span>
                                    </p>
                                    <p className="text-zinc-400 text-sm flex items-center justify-between pt-3">
                                        <span>To Buy</span>
                                        <span>{ToBuy ? ToBuy : '---'}</span>
                                    </p>
                                </div>
                                <div className="bg-black/80 py-5 px-3 rounded-xl mt-3">
                                    <p className="text-zinc-400 text-sm flex items-center justify-between ">
                                        <span>Platform Fee</span>
                                        <span>{PlatformFee}</span>
                                    </p>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            }
        </>
    )
}