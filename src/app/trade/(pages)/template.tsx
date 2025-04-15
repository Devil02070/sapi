'use client'
import Aurora from "@/components/ui/Aurora";
import Background from "@/components/ui/Background";
import TradeTabs from '@/components/Tradetabs';
import { useProMode } from "@/utils/promode";
import Orders from '@/components/Orders'
import Chart from "@/components/Chart";
import { useState } from "react";
import BottomBar from "@/components/BottomBar";
import { motion } from 'framer-motion'
export default function TradeLayout({ children }: { children: React.ReactNode }) {
    const { proMode } = useProMode();
    const [activetab] = useState(1)
    return (
        <>
            <section className={`px-5 md:px-10 pb-28`}>
                <div className="container-fluid m-auto">
                    <div className="row flex flex-wrap md:flex-nowrap gap-3 justify-center">
                        <div className={`w-full md:w-[35%] 2xl:w-[25%] ${proMode ? 'mt-0' : 'mt-0 md:-mt-13'}`}>
                            <TradeTabs />
                            {children}
                        </div>
                        {
                            proMode &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, ease: "ease" }}
                                className="relative z-10 w-full md:w-[65%] 2xl:w-[75%] overflow-hidden"
                            >
                                <div className="p-6 btn-bg rounded-3xl">
                                    <p className="rounded-2xl w-fit p-2 px-3 text-xs bg-color1 border border-black">Price Chart</p>
                                    <Chart />
                                </div>
                                <div className="p-6 btn-bg rounded-3xl mt-3 ">
                                    <Orders tabtoshow={activetab} />
                                </div>
                            </motion.div>
                        }
                    </div>
                </div>
            </section>
            <Aurora colorStops={["#1ea59a", "#9EC8B9", "#2d82e4"]} blend={0.5} amplitude={1.0} speed={0.7} />
            <Background />
            <BottomBar />
        </>
    )
}