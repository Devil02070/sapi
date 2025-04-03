'use client'

import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoRefresh } from "react-icons/io5";
import { MdOutlineDocumentScanner } from "react-icons/md";
export default function Orders({ tabtoshow }: { tabtoshow: number }) {
    const [isActive, setisActive] = useState(tabtoshow);
    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
                <div className="tabs w-full md:w-1/2 flex gap-6 text-lg">
                    <div onClick={() => setisActive(1)} className={`cursor-pointer hover-primary ${isActive == 1 ? 'text-primary' : 'text-white hidden md:block'}`}><p>Open Orders</p></div>
                    <div onClick={() => setisActive(2)} className={`cursor-pointer hover-primary ${isActive == 2 ? 'text-primary' : 'text-white hidden md:block'}`}><p>DCA</p></div>
                    <div onClick={() => setisActive(3)} className={`cursor-pointer hover-primary ${isActive == 3 ? 'text-primary' : 'text-white hidden md:block'}`}><p>History</p></div>
                </div>
                <div className="w-full md:w-1/2 flex justify-between md:justify-end gap-4 mt-3 md:mt-0">
                    <div className="flex gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-sm">hide other pairs</span>
                    </div>
                    <IoRefresh className="text-lg cursor-pointer hover-primary" />
                </div>
            </div>
            <div className="content mt-4">
                {
                    isActive == 1 &&
                    <div className="open-orders">
                        {/* <div className="no-orders py-10 px-6">
                            <MdOutlineDocumentScanner className="text-7xl m-auto text-zinc-700" />
                            <p className="text-center text-sm mt-2 text-zinc-400">No data to display</p>
                        </div> */}
                        <div className="overflow-x-auto">
                            <table className="hidden md:table w-max md:w-full ">
                                <thead className="">
                                    <tr className="grid grid-cols-12 gap-1">
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-start text-zinc-400">Pair</th>
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-end text-zinc-400">Amount</th>
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-end text-zinc-400">Price</th>
                                        <th className="col-span-3 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-end text-zinc-400">Fill/Total</th>
                                        <th className="col-span-3 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-end text-zinc-400">Expiration & Action</th>
                                    </tr>
                                </thead>
                            </table>

                            <div className="max-h-[80vh] md:max-h-[68vh] overflow-y-auto scrollbar">
                                <table className="table w-max md:w-full">
                                <thead className="block md:hidden">
                                    <tr className="grid grid-cols-12 gap-1">
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm py-1 md:py-2 px-2 md:px-3 text-start text-zinc-400">Pair</th>
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm py-1 md:py-2 px-2 md:px-3 text-end text-zinc-400">Amount</th>
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm py-1 md:py-2 px-2 md:px-3 text-end text-zinc-400">Price</th>
                                        <th className="col-span-3 bg-color1 rounded-xl font-medium text-sm py-1 md:py-2 px-2 md:px-3 text-end text-zinc-400">Fill/Total</th>
                                        <th className="col-span-3 bg-color1 rounded-xl font-medium text-sm py-1 md:py-2 px-2 md:px-3 text-end text-zinc-400">Expiration & Action</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        {
                                            Array.from({ length: 50 }).map((item, _i) => {
                                                return (
                                                    <tr key={_i} className="grid grid-cols-12 gap-1">
                                                        <td className="col-span-2 bg-white/10 rounded-xl mt-1 md:mt-2 py-1 md:py-2 px-3 text-start text-zinc-400">Move</td>
                                                        <td className="col-span-2 bg-white/10 rounded-xl mt-1 md:mt-2 py-1 md:py-2 px-3 text-end text-zinc-400">500</td>
                                                        <td className="col-span-2 bg-white/10 rounded-xl mt-1 md:mt-2 py-1 md:py-2 px-3 text-end text-zinc-400">$ 0.5</td>
                                                        <td className="col-span-3 bg-white/10 rounded-xl mt-1 md:mt-2 py-1 md:py-2 px-3 text-end text-zinc-400">300/500</td>
                                                        <td className="col-span-3 bg-white/10 rounded-xl mt-1 md:mt-2 py-1 md:py-2 px-3 text-end text-zinc-400 flex justify-end gap-2">
                                                            <span className="border rounded-lg p-1 text-xs text-black bg-primary">3h:30m:50s</span>
                                                            <GoArrowUpRight className="rounded p-1 bg-black/70 text-white text-2xl hover-bg cursor-pointer" />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
                {
                    isActive == 2 &&
                    <div className="dca">
                        <div className="overflow-hidden">
                            <table className="table w-full">
                                <thead className="">
                                    <tr className="grid grid-cols-12 gap-1">
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-start">Coin</th>
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-start">Min Price</th>
                                        <th className="col-span-2 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-end">Max Price</th>
                                        <th className="col-span-5 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-start">Amount Each Order/ Over Orders/ Every</th>
                                        <th className="col-span-1 bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div className="no-orders py-10 px-6">
                            <MdOutlineDocumentScanner className="text-7xl m-auto text-zinc-700" />
                            <p className="text-center text-sm mt-2 text-zinc-400">No data to display</p>
                        </div>
                    </div>
                }
                {
                    isActive == 3 &&
                    <div className="history">
                        <div className="overflow-hidden">
                            <table className="table w-full">
                                <thead className="">
                                    <tr className="grid grid-cols-7 gap-1">
                                        <th className="bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-start">Time</th>
                                        <th className="bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-start">Pair</th>
                                        <th className="bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-end">Input</th>
                                        <th className="bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-end">Output</th>
                                        <th className="bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-start">Price</th>
                                        <th className="bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-end">Total Value</th>
                                        <th className="bg-color1 rounded-xl font-medium text-sm p-2 px-3 text-zinc-400 text-end">Digest</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div className="no-orders py-10 px-6">
                            <MdOutlineDocumentScanner className="text-7xl m-auto text-zinc-700" />
                            <p className="text-center text-sm mt-2 text-zinc-400">No data to display</p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}