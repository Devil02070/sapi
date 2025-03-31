'use client'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from 'next-themes'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import TradeTabs from "./Tradetabs";
import { useProMode } from "@/utils/promode";
export default function Header() {
    const { proMode } = useProMode();
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
            <section className="header py-4">
                <div className="container m-auto px-5">
                    <div className="row flex flex-wrap md:flex-nowrap items-center justify-between">
                        <div className="col w-full md:w-[35%]">
                            <h2 className="text-2xl text-grad">SAPI</h2>
                        </div>
                        <div className="col w-full md:w-[30%]">
                            {proMode ? '' : <TradeTabs />}
                        </div>
                        <div className="col flex gap-2 md:gap-4 w-full md:w-[35%] justify-end">
                            <div className="btn-bg flex items-center gap-4 p-2 px-4 rounded-4xl">
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
                            <button className="bg-primary text-black text-sm py-1 px-3 rounded-4xl">Connect Wallet</button>
                        </div>
                        {/* <div className="col  flex gap-2 md:gap-4">
                            <button className="text-primary text-sm py-2 px-2 md:px-5 btn-bg rounded-">40.00 MOVE</button>
                            <button className="text-primary text-sm py-2 px-2 md:px-5 btn-bg rounded-4xl">0x345...5f3bd</button>
                            <button className="text-primary text-sm md:text-lg py-2 px-2 md:px-5 btn-bg rounded-4xl cursor-pointer" onClick={() => ToggleTheme()}>
                                {
                                    theme == 'light' ?
                                        <MdOutlineLightMode />
                                        :
                                        <MdOutlineDarkMode />
                                }
                            </button>
                            <button className="text-primary text-sm md:text-lg py-2 md:py-4 px-2 md:px-5 btn-bg rounded-lg"><BsThreeDotsVertical /></button>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}