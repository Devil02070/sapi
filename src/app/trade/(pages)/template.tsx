'use client'
import Aurora from "@/components/ui/Aurora";
import Background from "@/components/ui/Background";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import TradeTabs from '@/components/Tradetabs';
import { useProMode } from "@/utils/promode";
import Orders from '@/components/Orders'
import Chart from "@/components/Chart";
export default function TradeLayout({ children }: { children: React.ReactNode }) {
    const { proMode, toggleProMode } = useProMode();
    return (
        <>
            {/* <section className={`px-5 md:px-10 ${proMode ? 'pt-8' : 'pb-26'}`}> */}
            <section className={`px-5 md:px-10 pb-28`}>
                <div className="container-fluid m-auto">
                    <div className="row flex flex-wrap md:flex-nowrap gap-3 justify-center">
                        <div className={`w-full md:w-[35%] 2xl:w-[25%] ${proMode ? 'mt-0' : '-mt-13'}`}>
                            <TradeTabs />
                            {children}
                        </div>
                        {
                            proMode &&
                            <div className="relative z-10 w-full md:w-[65%] 2xl:w-[75%] overflow-hidden"> 
                                <div className="p-6 btn-bg rounded-3xl">
                                    <p className="rounded-2xl w-fit p-2 px-3 text-xs bg-color1 border border-black">Price Chart</p>
                                    <Chart/>
                                </div>

                                <div className="p-6 btn-bg rounded-3xl mt-3 ">
                                    <Orders/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
            <Aurora
                colorStops={["#1ea59a", "#FEBF32", "#2d82e4"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.7}
            />
            <Background />


            <div className="pro-bar z-50 fixed bottom-4 w-full ">
                <div className="flex items-center gap-2 text-sm text-zinc-400 bg-black w-fit rounded-4xl p-4 m-auto">
                    <div className="hover:bg-white/20 rounded-2xl py-2 px-4 cursor-pointer"><IoSettingsOutline /></div>
                    <div className="h-4 border-r border-zinc-800"></div>
                    <div className="px-2 flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={proMode} readOnly />
                            <div
                                className="group peer btn-bg rounded-full duration-300 w-12 h-5 after:duration-300 after:bg-zinc-400 peer-checked:after:bg-yellow-500 after:rounded-full after:absolute after:h-3 after:w-3 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-hover:after:scale-95" onClick={toggleProMode}></div>
                        </label>
                        <span>Pro Mode</span>
                    </div>
                    <div className="h-4 border-r border-zinc-800"></div>
                    {proMode ? '' :
                        <>
                            <div className="hover:bg-white/20 rounded-2xl py-2 px-4 cursor-pointer">Open Orders</div>
                            <div className="h-4 border-r border-zinc-800"></div>
                            <div className="hover:bg-white/20 rounded-2xl py-2 px-4 cursor-pointer">DCA</div>
                            <div className="h-4 border-r border-zinc-800"></div>
                            <div className=" hover:bg-white/20 hover:rounded-2xl py-2 px-4 cursor-pointer">History</div>
                            <div className="h-4 border-r border-zinc-800"></div>
                        </>
                    }

                    <div className="flex items-center gap-2 hover:bg-white/20 rounded-2xl py-2 px-4 cursor-pointer"><RiMenuUnfoldLine />More</div>
                </div>
            </div>


        </>
    )
}