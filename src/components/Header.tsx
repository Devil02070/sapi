'use client'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from 'next-themes'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import ConnectWallet from "./Connectwallet";
export default function Header() {
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
                            <ConnectWallet/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}