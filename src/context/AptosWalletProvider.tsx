"use client"

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react"
import { NetworkToNetworkName } from "@aptos-labs/ts-sdk"
// import { aptosNetwork } from "@/utils/env"
// import { useApp } from "./AppProvider"
export function AptosWalletProvider({ children }: { children: React.ReactNode }) {
    // const { chain } = useApp()
    return (
        // <AptosWalletAdapterProvider autoConnect={chain === "aptos"} dappConfig={{
        <AptosWalletAdapterProvider dappConfig={{
            // network: NetworkToNetworkName[aptosNetwork],
            network: NetworkToNetworkName['devnet'],
        }}>
            {children}
        </AptosWalletAdapterProvider>
    )
}