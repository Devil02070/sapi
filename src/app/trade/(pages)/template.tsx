'use client'
import Aurora from "@/components/ui/Aurora";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Background from "@/components/ui/Background";
export default function TradeLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const paths = [

        {
            name: "Swap",
            to: "swap"
        },
        {
            name: "Limit",
            to: "limit"
        },
        {
            name: "Dca",
            to: "dca"
        }
    ]
    return (
        <>
            <section className="py-10 px-5">
                <div className="container m-auto">
                    <div className="row flex gap-2 m-auto btn-bg w-fit p-2 px-4 rounded-4xl relative z-50" id="trade-tabs">
                        {
                            paths.map((path, index) => (
                                <Link href={`/trade/${path.to}`} className={`tab text-primary py-2 px-6 rounded-4xl btn-bg hover-bg ${pathname === `/trade/${path.to}` ? "active" : ""}`} key={`trade-path-${index}`}>{path.name}</Link>
                            ))
                        }
                    </div>

                    <div className="row flex flex-wrap md:flex-nowrap gap-4 justify-center mt-4 z-50 relative">
                        <div className="col w-full md:w-[30%] btn-bg rounded-2xl p-4 md:p-10 ">
                            {children}
                        </div>

                        <div className="col w-full md:w-[70%] hidden">
                            <div className="p-20 btn-bg rounded-2xl"></div>
                            <div className="p-20 btn-bg rounded-2xl mt-6 "></div>

                        </div>
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


        </>
    )
}