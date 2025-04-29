'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};
export default function RoutingModal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;
    return (
        <>
            <AnimatePresence>
                <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex items-end md:items-center justify-center px-0 md:px-5 modal-bg-backdrop">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "ease" }}
                        className="p-4 md:p-6 rounded-t-2xl md:rounded-2xl relative w-full md:w-[70%] lg:w-[50%] xl:w-[40%] border modal-border modal-bg"
                    >
                        <div className="title flex items-center justify-between border-b border-zinc-700/50 pb-5">
                            <h2 className="text-2xl lg:text-xl text-grad">Liquidity Sources</h2>
                            <button onClick={onClose} className="cursor-pointer text-sm bg-dark p-1 rounded px-2">Esc</button>
                        </div>
                        <div className="flex justify-between items-center mt-4 bg-black p-4 rounded-2xl">
                            <p>Customized Routing <span className="text-primary">- OFF</span></p>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={true} readOnly />
                                <div className="group peer card-bg rounded-full duration-300 w-12 h-5 after:duration-300 after:bg-zinc-400 peer-checked:after:bg-cyan-500 after:rounded-full after:absolute after:h-3 after:w-3 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95"></div>
                            </label>
                        </div>
                        <div className="content mt-6">
                            <p>Dexes</p>
                            {/* <ul className="mt-4 flex flex-wrap gap-2"> */}
                            <ul className="max-h-[20vh] md:max-h-[40vh] overflow-auto mt-4 flex flex-wrap gap-1 md:gap-2 scrollbar">
                                {
                                    Array.from({ length: 5 }).map((item, _i) => {
                                        return (
                                            <li key={_i} className="w-[49%] text-base md:text-lg p-3 flex gap-2 items-center justify-between cursor-pointer border-b border-white/4 bg-black/80 rounded-xl transition-all ">
                                                <div className="flex items-center gap-2">
                                                    <Image src="/media/aptos.jpg" alt="wallet-logo" height={300} width={300} className="h-5 w-5 rounded-full" />
                                                    <div className="text-start">
                                                        <p className="text-sm">test</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" className="sr-only peer" checked={true} readOnly />
                                                        <div className="group peer card-bg rounded-full duration-300 w-12 h-5 after:duration-300 after:bg-zinc-400 peer-checked:after:bg-cyan-500 after:rounded-full after:absolute after:h-3 after:w-3 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95"></div>
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <p className="mt-6">Others</p>
                            {/* <ul className="mt-4 flex flex-wrap gap-2"> */}
                            <ul className="max-h-[20vh] md:max-h-[40vh] overflow-auto mt-4 flex flex-wrap gap-1 md:gap-2 scrollbar">
                                {
                                    Array.from({ length: 5 }).map((item, _i) => {
                                        return (
                                            <li key={_i} className="w-[49%] text-base md:text-lg p-3 flex gap-2 items-center justify-between cursor-pointer border-b border-white/4 bg-black/80 rounded-xl transition-all ">
                                                <div className="flex items-center gap-2">
                                                    <Image src="/media/aptos.jpg" alt="wallet-logo" height={300} width={300} className="h-5 w-5 rounded-full" />
                                                    <div className="text-start">
                                                        <p className="text-sm">test</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" className="sr-only peer" checked={true} readOnly />
                                                        <div className="group peer card-bg rounded-full duration-300 w-12 h-5 after:duration-300 after:bg-zinc-400 peer-checked:after:bg-cyan-500 after:rounded-full after:absolute after:h-3 after:w-3 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95"></div>
                                                    </label>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </AnimatePresence>
        </>
    )
}