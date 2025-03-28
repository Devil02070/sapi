'use client'

import Image from "next/image"

export default function Background(){
    return(
        <>
        <div className="animate-bg">
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[60px] w-[60px] rounded-full floating-tokens t1 absolute top-[30%] right-[90%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[70px] w-[70px] rounded-full floating-tokens t2 absolute top-[20%] right-[75%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[50px] w-[50px] rounded-full floating-tokens t3 absolute top-[40%] right-[66%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[60px] w-[60px] rounded-full floating-tokens t4 absolute top-[15%] right-[32%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[60px] w-[60px] rounded-full floating-tokens t5 absolute top-[30%] right-[20%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[45px] w-[45px] rounded-full floating-tokens t6 absolute top-[20%] right-[5%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[60px] w-[60px] rounded-full floating-tokens t7 absolute top-[70%] right-[90%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[50px] w-[50px] rounded-full floating-tokens t8 absolute top-[80%] right-[76%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[50px] w-[50px] rounded-full floating-tokens t8 absolute top-[65%] right-[30%]" />
            <Image src="/media/movement.jpg" alt="wallet-logo" height={300} width={300} className="h-[60px] w-[60px] rounded-full floating-tokens t8 absolute top-[70%] right-[10%]" />
        </div>
        </>
    )
}