'use client'
import Image from "next/image"
import { LuArrowDownUp, LuWallet } from "react-icons/lu"
import { MdErrorOutline, MdKeyboardArrowDown } from "react-icons/md"
import { useEffect, useState } from "react"
import { useWallet } from "@aptos-labs/wallet-adapter-react"
import OrderDetails from "@/components/OrderDetails"
import TokensModal from "@/components/TokensModal"
import ConfirmSwap from "./ConfirmSwap"

interface Token {
    name: string;
    full_name: string;
    token_image: string;
    balance: number
}


export default function Body() {
    const { connected } = useWallet();
    const [isOpen, setIsOpen] = useState(false)
    const [currentfield, setcurrentfield] = useState('')
    const [fromToken, setFromToken] = useState<Token | null>(null);
    const [toToken, setToToken] = useState<Token | null>(null);
    const [fromAmount, setFromAmount] = useState("");
    const [toAmount, setToAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [confirmModal, setConfirmModal] = useState(false)

    // Order Details -->
    const currentPrice = fromToken && toToken ? `1 ${fromToken.name} = 4.95 ${toToken.name}` : '';
    const swapOrder = fromAmount && fromToken ? `${fromAmount} ${fromToken.name}` : '';
    const toBuy = fromAmount ? `${(parseFloat(fromAmount) * 4.95).toFixed(2)} ${toToken?.name || ''}` : '';
    // order Details end-->

    const ShowTokensModal = (modaltype: string) => {
        if (modaltype == "from") {
            setcurrentfield('from')
            setIsOpen(true)
        } else {
            setcurrentfield('to')
            setIsOpen(true)
        }
    }

    const selectToken = (token: Token) => {
        if (currentfield == "from") {
            setFromToken(token)
        } else {
            setToToken(token)
        }
        setIsOpen(false)
    }
    const ModifyTokenOrder = () => {
        if (fromToken && toToken) {
            setFromToken(toToken);
            setToToken(fromToken);
        }
    }
    const handleMaxClick = () => {
        if (fromToken && fromToken.balance) {
            const maxAmount = fromToken.balance.toString();
            setFromAmount(maxAmount);
        }
    };
    const closeConfirmModal = () => {
        setConfirmModal(false)
    }
    useEffect(() => {
        if (
            fromAmount &&
            !isNaN(parseFloat(fromAmount))
        ) {
            const inputVal = parseFloat(fromAmount);


            if (fromToken && inputVal > fromToken.balance) { // Add null check for fromToken
                setError("Insufficient balance");
                setToAmount("");
                return;
            } else {
                setError("");
            }

            setLoading(true);
            const delayFetch = setTimeout(() => {
                const rate = 4.95; // Simulated fetch
                const calculated = parseFloat(fromAmount) * rate;
                setToAmount(calculated.toFixed(3));
                setLoading(false);
            }, 2000); // simulate delay

            return () => clearTimeout(delayFetch); // cancel on fast input
        } else {
            setToAmount('');
        }
    }, [fromAmount, fromToken, toToken]);
    return (
        <>
            <div className="w-full card-bg rounded-3xl p-1 relative z-50">
                <div className="field-bg px-4 md:px-5 py-5 md:py-6 rounded-3xl border border-transparent hover:border-white/20">
                    <p className="text-zinc-400 text-sm">You pay</p>
                    <div className="input-group flex items-center">
                        <div className="w-1/2">
                            <input type="text" placeholder="0.0" value={fromAmount} onChange={(e) => setFromAmount(e.target.value)} className="py-2 text-3xl w-full focus:outline-none text-grad" />
                        </div>
                        <div className="flex gap-2 justify-end w-1/2">

                            {fromToken ?
                                <>
                                    <button className="px-1 md:px-3 text-sm md:text-base rounded text-primary cursor-pointer hover:opacity-70" onClick={() => handleMaxClick()}>max</button>
                                    <button className="border border-zinc-700 rounded-3xl py-2 px-2 relative flex items-center gap-2 cursor-pointer text-xs md:text-sm" onClick={() => ShowTokensModal('from')}>
                                        <Image src={fromToken.token_image} alt="token-image" height={100} width={100} className="h-3 md:h-5 w-3 md:w-5 rounded-full" />
                                        {fromToken.name}
                                        <span><MdKeyboardArrowDown className="" /></span>
                                    </button>
                                </>
                                :
                                <button className="rounded-4xl py-2 px-3 text-xs md:text-sm cursor-pointer bg-primary text-black" onClick={() => ShowTokensModal('from')}>
                                    Select Token
                                </button>
                            }

                        </div>
                    </div>
                    <div className="flex justify-between">
                        {error && (
                            <p className="text-red-400 text-xs flex gap-1 items-center"><MdErrorOutline />{error}</p>
                        )}
                        <p className="pt-1 text-xs text-zinc-400 flex gap-2 items-center justify-end ms-auto"><LuWallet />{fromToken ? fromToken.balance : '0.00'}</p>
                    </div>
                </div>
                <LuArrowDownUp className="text-primary text-2xl card-bg p-1 rounded m-auto cursor-pointer -mt-[10px] -mb-[10px] hover-bg relative z-10" onClick={() => ModifyTokenOrder()} />
                <div className="field-bg px-4 md:px-5 py-5 md:py-6 rounded-3xl border border-transparent hover:border-white/20">
                    <p className="text-zinc-400 text-sm">You receive</p>
                    <div className="input-group flex items-center">
                        <div className="w-1/2">
                            {
                                loading ?
                                    <div className="fieldloader"></div>
                                    :
                                    <input
                                        type="text"
                                        value={toAmount}
                                        placeholder="0.0"
                                        readOnly
                                        className="py-2 text-3xl w-full focus:outline-none text-grad"
                                    />
                            }
                        </div>
                        <div className="flex gap-2 justify-end w-1/2">
                            {
                                toToken ?
                                    <>
                                        {/* <button className="px-1 md:px-3 text-sm md:text-base rounded text-primary cursor-pointer hover:opacity-70"  onClick={() => handleMaxClick()}>max</button> */}
                                        <button className="border border-zinc-700 rounded-3xl py-2 px-2 relative flex items-center gap-2 cursor-pointer text-xs md:text-sm" onClick={() => ShowTokensModal('to')}>
                                            <Image src={toToken.token_image} alt="token-image" height={100} width={100} className="h-3 md:h-5 w-3 md:w-5 rounded-full" />
                                            {toToken.name}
                                            <span><MdKeyboardArrowDown className="" /></span>
                                        </button>
                                    </>
                                    :
                                    <button className="rounded-4xl py-2 px-3 text-xs md:text-sm cursor-pointer bg-primary text-black" onClick={() => ShowTokensModal('to')}>
                                        Select Token
                                    </button>

                            }
                        </div>
                    </div>
                    <p className="pt-1 text-xs text-zinc-400 flex gap-2 items-center justify-end"><LuWallet />{toToken ? toToken.balance : '0.00'}</p>
                </div>

                {connected ?
                    <button className="rounded-3xl btn-swap p-3 md:p-4 text-base md:text-xl cursor-pointer w-full mt-3 transition-all" onClick={() => setConfirmModal(true)}>Swap</button>
                    :
                    <button className="rounded-3xl btn-swap p-3 md:p-4 text-base md:text-xl cursor-pointer w-full mt-3 transition-all">Connect Wallet</button>
                }

                {/* Order Details */}
                <OrderDetails
                    CurrentPrice={currentPrice}
                    SwapOrder={swapOrder}
                    ToBuy={toBuy}
                    PlatformFee="0.2%"
                />
            </div>

            {/* Tokens Modals */}
            <TokensModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectToken={selectToken}
            />

            {/* Confirm Swap Modal */}
            <ConfirmSwap
                CurrentPrice={currentPrice}
                SwapOrder={swapOrder}
                ToBuy={toBuy}
                isOpen={confirmModal}
                onClose={closeConfirmModal}

            />
        </>
    )
}