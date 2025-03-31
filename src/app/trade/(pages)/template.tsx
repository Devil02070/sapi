'use client'
import Aurora from "@/components/ui/Aurora";
import Background from "@/components/ui/Background";
export default function TradeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="px-5">
                <div className="container m-auto">
                    <div className="row flex flex-wrap md:flex-nowrap gap-4 justify-center">
                        <div className="col w-full md:w-[35%] 2xl:w-[30%]">
                            {children}
                        </div>

                        <div className="col w-full md:w-[65%] 2xl:w-[70%] hidden">
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