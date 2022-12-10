import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xf1ac8D9c39502a41b91ab6491E3A858c0979e1d8"; 
//0x4eB62BE66db073f4764315E5E25086500c191FE1
//0x7A21FE7E1815ad187AF746aCc2B2E7196a8aEe40
export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Zwn1xEyFb82Yk6w27Ej20illPar2GJPl",
  },
};