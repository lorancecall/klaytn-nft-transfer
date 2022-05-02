import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      klaytn: null,
      addresses: null,
      caver: null,
      abi: [
        {
          constant: false,
          inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "amount", type: "uint256" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    };
  },
  mutations: {
    async connectWallet(state) {
      if (window.klaytn !== undefined) {
        state.klaytn = window.klaytn;
        state.addresses = await state.klaytn.enable().catch((error) => {
          console.error(error);
          return null;
        });
        state.caver = window.caver;
      } else {
        throw new Error("Kaikas Not Installed!");
      }
    },
  },
});

export default store;
