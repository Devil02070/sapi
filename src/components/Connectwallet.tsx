'use client'
import { motion } from 'framer-motion'
import Image from "next/image";
import React, { useState } from "react";
import { IoCloseOutline } from 'react-icons/io5';
import { useWallet, WalletReadyState } from "@aptos-labs/wallet-adapter-react";
import { useEffect } from "react";
import Link from 'next/link';
import { toast } from 'react-toastify'
import { useAptosClient } from '@/utils/aptosClient';

type CoinStore = {
  coin: {
    value: string;
  };
};

export default function ConnectWallet() {
  const { wallets, connect, account, disconnect, connected, network } = useWallet();
  const [walletmodal, setWalletModal] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const aptosClient = useAptosClient();

  const connectWallet = async (walletName: string) => {
    setIsloading(true)
    try {
      await connect(walletName);
      setIsloading(false)
      setWalletModal(!walletmodal)
      toast.success('Wallet Connected Successfully.')
      localStorage.setItem("walletName", walletName);
    } catch (error) {
      setIsloading(false)
      console.error("Connection error:", error);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();
    localStorage.removeItem("walletName");
  };

  // -----------------------------
  // Display Apt Wallet Balance
  // -----------------------------
  const getAptBalance = async (address: string): Promise<number> => {
    try {
      const resource = await aptosClient.getAccountResource(
        address,
        "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>"
      );
      const coinData = resource.data as CoinStore;
      const raw = coinData.coin.value;
      return Number(raw) / 1e8;
    } catch (error) {
      console.error("Failed to fetch balance:", error);
      return 0;
    }
  };
  useEffect(() => {
    if (account?.address) {
      getAptBalance(account.address.toString()).then(setBalance);
      // console.log("Connected network:", network?.name);
    }
  }, [account?.address, aptosClient, network?.name]);

  // Auto connect wallet on refresh
  useEffect(() => {
    const savedWallet = localStorage.getItem("walletName");
    if (savedWallet) {
      const wallet = wallets.find((w) => w.name === savedWallet);
      if (wallet && !connected) {
        connect(savedWallet)
      }
    }
  }, [wallets]);

  return (
    <>
      {!connected ?
        <button className="bg-primary text-black text-sm py-1 px-3 rounded-4xl cursor-pointer font-bold" onClick={() => setWalletModal(!walletmodal)}>Connect Wallet</button>
        :
        <>
          <button className="btn-bg text-primary text-sm py-1 px-3 rounded-xl cursor-pointer" >{balance} APT</button>
          <button className="btn-bg text-primary text-sm py-1 px-3 rounded-xl cursor-pointer" >{account?.address.toString().slice(0, 4)}...{account?.address.toString().slice(-4)}</button>
          <button className="bg-primary text-black text-sm py-1 px-3 rounded-4xl cursor-pointer" onClick={() => disconnectWallet()}>Disconnect</button>
        </>
      }

      {walletmodal && (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-60 flex items-center justify-center px-5 modal-bg">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "ease" }} className="p-4 md:p-6 rounded-2xl btn-bg relative w-full md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[25%]" >
            <div className="title">
              {
                isloading ?
                  <h2 className="text-2xl lg:text-3xl text-center text-grad">Connecting Wallet...</h2>
                  :
                  <h2 className="text-2xl lg:text-3xl text-center text-grad">Connect Wallet</h2>
              }
            </div>
            <div className="content mt-6">
              {
                isloading ?
                  <>
                    <div className="loader m-auto"></div>
                  </>
                  :
                  <ul className="max-h-[50vh] overflow-auto scrollbar-hidden mt-4 flex flex-col gap-2">
                    {wallets && wallets.map((wallet, _i) => (
                      <React.Fragment key={_i}>
                        {wallet.readyState === WalletReadyState.Installed
                          ?
                          <li className="relative text-base p-3 text-center bg-black/30 rounded-xl hover:bg-zinc-400/10 flex gap-4 items-center cursor-pointer" onClick={() => connectWallet(wallet.name)}>
                            <Image src={wallet.icon} alt="wallet-logo" height={300} width={300} className="h-[24px] w-[24px] rounded-full" />
                            <div className="text-start">
                              <p className="text-zinc-200">{wallet.name}</p>
                              <span className='absolute p-1 rounded text-[10px] text-zinc-400 right-3 top-3 btn-bg'>Detected</span>
                            </div>
                          </li>
                          :
                          <li className="text-lg py-3 px-2 text-center bg-black/40 rounded-xl hover:bg-zinc-400/10 flex gap-4 items-center cursor-pointer" onClick={() => connectWallet(wallet.name)}>
                            <Image src={wallet.icon} alt="wallet-logo" height={300} width={300} className="h-[30px] w-[30px] rounded-full" />
                            <Link className="flex items-center gap-3 justify-center" href={wallet.url ? wallet.url : "#"} target="_blank">
                              <p className="text-zinc-200">{wallet.name}</p>
                              <span className='absolute p-1 rounded text-[10px] text-zinc-400 right-5 top-5 btn-bg'>Install</span>
                            </Link>
                          </li>
                        }
                      </React.Fragment>
                    ))
                    }
                  </ul>
              }
            </div>
            <button onClick={() => setWalletModal(!walletmodal)} className="absolute top-4 md:top-5 right-4 md:right-5 cursor-pointer text-3xl hover:bg-zinc-700 rounded hover-primary"><IoCloseOutline />
            </button>
          </motion.div >
        </div >
      )
      }
    </>
  )
}