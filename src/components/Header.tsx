'use client'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from 'next-themes'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { IoCloseOutline, IoDocumentText } from "react-icons/io5";
import { useState } from "react";
import { motion } from 'framer-motion'
import Image from "next/image";
export default function Header() {
    const [walletmodal, setWalletModal] = useState(false);
    const { theme, setTheme } = useTheme()
    const ToggleTheme = () => {
        if (theme == 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <>
            <section className="header py-4 px-5 md:px-10">
                <div className="container-fluid m-auto">
                    <div className="row flex flex-wrap md:flex-nowrap items-center justify-between">
                        <div className="col w-[30%] md:w-[35%]">
                            <h2 className="text-2xl text-grad">SAPI</h2>
                        </div>
                        {/* <div className="col w-full md:w-[30%]"></div> */}
                        <div className="col flex gap-2 md:gap-4 w-[70%] md:w-[35%] justify-end">
                            <div className="btn-bg hidden md:flex items-center gap-4 p-2 px-4 rounded-4xl">
                                <FaXTwitter className="hover-primary cursor-pointer" />
                                <FaDiscord className="hover-primary cursor-pointer" />
                                <IoDocumentText className="hover-primary cursor-pointer" />
                            </div>
                            <button className="text-primary text-sm md:text-lg p-3 btn-bg rounded-full cursor-pointer" onClick={() => ToggleTheme()}>
                                {
                                    theme == 'light' ?
                                        <MdOutlineLightMode />
                                        :
                                        <MdOutlineDarkMode />
                                }
                            </button>
                            <button className="bg-primary text-black text-sm py-1 px-3 rounded-4xl cursor-pointer" onClick={() => setWalletModal(!walletmodal)}>Connect Wallet</button>
                        </div>
                    </div>
                </div>
            </section>

            {walletmodal && (
                <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex items-center justify-center px-5 modal-bg">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "ease" }} className="p-4 md:p-6 rounded-2xl btn-bg relative w-full md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]" >
                        <div className="title">
                            <h2 className="text-2xl lg:text-3xl text-center text-grad">Connect Walllet</h2>
                        </div>
                        <div className="content mt-6">
                            <ul className="max-h-[50vh] overflow-auto scrollbar-hidden mt-4 flex flex-col gap-2">
                                {
                                    Array.from({ length: 5 }).map((item, _i) => {
                                        return (
                                            <>
                                                <li key={_i} className="text-lg py-3 px-2 text-center bg-black/40 rounded-xl hover:bg-zinc-400/10 flex gap-4 items-center" onClick={() => setWalletModal(!walletmodal)}>
                                                    <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[30px] w-[30px] rounded-full" />
                                                    <div className="text-start">
                                                        <p className="text-zinc-200">Petra</p>
                                                    </div>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <button onClick={() => setWalletModal(!walletmodal)} className="absolute top-4 md:top-5 right-4 md:right-5 cursor-pointer text-3xl hover:bg-zinc-700 rounded hover-primary"><IoCloseOutline />
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    )
}