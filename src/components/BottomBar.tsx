'use client'

import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { IoCloseOutline, IoSettingsOutline } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Orders from "./Orders";
import { useProMode } from "@/utils/promode";

export default function BottomBar() {
    const { proMode, toggleProMode } = useProMode();
    const [activetab, setActiveTab] = useState(1)
    const [ordersModal, setOrdersModal] = useState(false)
    const [visibleDropdown, setVisibleDropdown] = useState<null | string>(null);
    const toggleDropdown = (dropdown: string) => {
        setVisibleDropdown((prev) => (prev === dropdown ? null : dropdown));
    };
    const showOrdersModal = (tab: number) => {
        setOrdersModal(!ordersModal)
        setActiveTab(tab)
    }
    return (
        <>
            {/* Bottom Fixed Menubar */}
            <div className="pro-bar z-50 fixed bottom-4 w-full ">
                <div className="flex items-center gap-2 text-sm text-zinc-400 field-bg w-fit rounded-4xl p-2 md:p-4 m-auto relative">
                    <div className="bg-white/6 hover:bg-white/20 rounded-2xl p-2 cursor-pointer" onClick={() => toggleDropdown("setting")}><IoSettingsOutline /></div>
                    <div className="h-4 border-r border-zinc-800"></div>
                    <div className="hidden px-2 md:flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={proMode} readOnly />
                            <div className="group peer card-bg rounded-full duration-300 w-12 h-5 after:duration-300 after:bg-zinc-400 peer-checked:after:bg-cyan-500 after:rounded-full after:absolute after:h-3 after:w-3 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95" onClick={toggleProMode}></div>
                        </label>
                        <span>Pro Mode</span>
                    </div>
                    <div className="hidden md:block h-4 border-r border-zinc-800"></div>
                    {proMode ? '' :
                        <>
                            <div className="hover:bg-white/20 rounded-2xl py-2 px-4 cursor-pointer" onClick={() => showOrdersModal(1)}>Open Orders</div>
                            <div className="h-4 border-r border-zinc-800"></div>
                            <div className="hover:bg-white/20 rounded-2xl py-2 px-4 cursor-pointer" onClick={() => showOrdersModal(2)}>DCA</div>
                            <div className="h-4 border-r border-zinc-800"></div>
                            <div className="hidden md:block hover:bg-white/20 hover:rounded-2xl py-2 px-4 cursor-pointer" onClick={() => showOrdersModal(3)}>History</div>
                            <div className="hidden md:block h-4 border-r border-zinc-800"></div>
                        </>
                    }
                    <div className="flex items-center gap-2 hover:bg-white/20 rounded-2xl py-2 px-4 cursor-pointer" onClick={() => toggleDropdown("more")}>
                        <RiMenuUnfoldLine /><span className="hidden md:block">More</span>
                    </div>
                    {/* More */}
                    <AnimatePresence initial={false}>
                        {visibleDropdown === "more" && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="dropdown p-2 border border-zinc-700/50 rounded-xl bg-black absolute right-0 bottom-14 md:bottom-18 z-50"
                            >
                                <h3 className="text-lg font-bold ms-1">More</h3>
                                <ul className="w-[150px] text-sm">
                                    <li className="md:hidden btn-bg rounded-xl py-2 px-3 hover:opacity-90 mt-2 cursor-pointer" onClick={() => showOrdersModal(3)}>History</li>
                                    <li className="btn-bg rounded-xl py-2 px-3 hover:opacity-90 mt-2 cursor-pointer" onClick={() => toggleDropdown("more")}>FeedBack</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Setting */}
                    <AnimatePresence initial={false}>
                        {visibleDropdown === "setting" && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="dropdown p-2 border border-zinc-700/50 rounded-xl bg-black absolute left-0 bottom-14 md:bottom-18 z-50"
                            >
                                <h3 className="text-lg font-bold ms-1">Settings</h3>
                                <ul className="w-[150px] text-sm">
                                    <li className="btn-bg rounded-xl py-2 px-3 hover:opacity-90 mt-2 cursor-pointer" onClick={() => toggleDropdown("setting")}>----</li>
                                    <li className="btn-bg rounded-xl py-2 px-3 hover:opacity-90 mt-2 cursor-pointer" onClick={() => toggleDropdown("setting")}>----</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>


            {/* Simple Mode Orders Modal */}
            {ordersModal && (
                <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex py-40 pb-0 md:py-20 modal-bg orders justify-center" onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setOrdersModal(!ordersModal);
                    }
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "ease" }}
                        className="relative w-full md:w-[80%] "
                    >
                        <div className="p-4 md:p-8 btn-bg rounded-3xl mt-3 h-full border border-zinc-700 overflow-hidden">
                            <Orders tabtoshow={activetab} />
                        </div>
                        {/* <button onClick={() => setOrdersModal(!ordersModal)} className="md:hidden absolute top-6 right-5 cursor-pointer text-3xl bg-zinc-700 rounded-lg"><IoCloseOutline /></button> */}
                        <button onClick={() => setOrdersModal(!ordersModal)} className="md:hidden absolute top-5 right-5 cursor-pointer text-sm bg-dark p-1 rounded px-2">Esc</button>
                    </motion.div>
                </div>
            )}

        </>
    )
}