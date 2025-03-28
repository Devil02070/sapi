'use client'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
export default function Header(){
    return(
        <>
        <section className="header py-4">
            <div className="container m-auto px-5">
                <div className="row flex flex-wrap md:flex-nowrap items-center justify-between">
                <div className="col ">
                    <h2 className="text-2xl md:text-5xl text-grad">SAPI</h2>
                </div>
                {/* <div className="col hidden md:block">
                    <ul className="flex items-center gap-8 text-lg">
                        <li className="text-primary">Swap</li>
                        <li>Pool</li>
                        <li>Deg</li>
                        <li>Vote</li>
                    </ul>
                </div> */}
                <div className="col  flex gap-2 md:gap-4">
                    <button className="text-primary text-sm md:text-base py-2 md:py-4 px-2 md:px-5 btn-bg rounded-lg">40.00 MOVE</button>
                    <button className="text-primary text-sm md:text-base py-2 md:py-4 px-2 md:px-5 btn-bg rounded-lg">0x345...5f3bd</button>
                    <button className="text-primary text-sm md:text-lg py-2 md:py-4 px-2 md:px-5 btn-bg rounded-lg"><MdOutlineLightMode/></button>
                    <button className="text-primary text-sm md:text-lg py-2 md:py-4 px-2 md:px-5 btn-bg rounded-lg"><BsThreeDotsVertical /></button>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}