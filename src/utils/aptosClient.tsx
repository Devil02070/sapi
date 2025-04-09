import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AptosClient } from "aptos";

export const useAptosClient = () => {
  const { network } = useWallet();

  const getClient = (networkName?: string) => {
    switch (networkName) {
      case "testnet":
        return new AptosClient("https://api.testnet.staging.aptoslabs.com/v1");
      case "mainnet":
        return new AptosClient("https://api.mainnet.aptoslabs.com/v1");
      default:
        return new AptosClient("https://api.devnet.staging.aptoslabs.com/v1");
    }
  };

  const networkName = network?.name ?? "devnet";

  return getClient(networkName);
};