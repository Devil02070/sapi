'use client'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import ConnectWallet from "./Connectwallet";
import ToggleTheme from "./ui/ToggleTheme";
export default function Header() {
    return (
        <>
            <section className="header py-4 px-5 md:px-10">
                <div className="container-fluid m-auto">
                    <div className="row flex flex-wrap md:flex-nowrap items-center justify-between">
                        <div className="col w-[30%] md:w-[35%]">
                            <h2 className="text-2xl text-grad">SAPI</h2>
                        </div>
                        <div className="col flex gap-2 md:gap-4 w-[70%] md:w-[35%] justify-end">
                            <div className="btn-bg hidden md:flex items-center gap-4 p-2 px-4 rounded-4xl">
                                <FaXTwitter className="hover-primary cursor-pointer" />
                                <FaDiscord className="hover-primary cursor-pointer" />
                                <IoDocumentText className="hover-primary cursor-pointer" />
                            </div>
                            <ToggleTheme/>
                            <ConnectWallet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}