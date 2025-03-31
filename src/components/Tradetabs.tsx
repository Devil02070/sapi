'use client'

import { paths } from "@/utils/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TradeTabs() {
    const pathname = usePathname()
    return (
        <>
        <div className={`flex gap-2 btn-bg w-fit p-1 rounded-4xl relative z-50 `}>
            {
                paths.map((path, index) => (
                    <Link href={`/trade/${path.to}`} className={`tab text-primary py-1 px-5 text-sm rounded-4xl btn-bg hover-bg ${pathname === `/trade/${path.to}` ? "active" : ""}`} key={`trade-path-${index}`}>{path.name}</Link>
                ))
            }
        </div>
        </>
    )
}
