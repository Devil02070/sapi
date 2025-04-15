'use client'
import { tokens } from '@/utils/constant'
import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'
interface TokensModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectToken: (token: { name: string, full_name:string, token_image: string, balance: number } ) => void;
  }
export default function TokensModal({isOpen, setIsOpen, selectToken}: TokensModalProps){
    return(
        <>
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
                                                <li key={_i} className="text-base md:text-lg p-2 flex gap-4 items-center justify-between cursor-pointer border-b border-white/4 hover:bg-black/10 rounded transition-all" onClick={() => selectToken(item)}>
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
                            {/* <button onClick={() => setIsOpen(false)} className="absolute top-4 md:top-5 right-4 md:right-5 cursor-pointer text-3xl"><IoCloseOutline /></button> */}
                            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 cursor-pointer text-sm bg-dark p-1 rounded px-2">Esc</button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}