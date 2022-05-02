<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="model-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="fa-regular fa-circle-xmark"></i>
          <!-- Modal Content -->
          <h1>NFT transfer</h1>
          <div class="modal-content">
            <div v-show="$store.state.klaytn !== null">
              <b>connected wallet</b>: {{ $store.state.addresses }}
            </div>
            <custom-form
              v-model:contractId="contractId"
              v-model:tokenId="tokenId"
              v-model:toAddress="toAddress"
            />
          </div>
          <button @click="close" type="button">Close</button>
          <button @click="sendTx" type="button">Send</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import CustomForm from "@/components/CustomForm.vue";
import { useStore } from "vuex";

export default {
  components: {
    CustomForm,
  },
  props: {
    modalActive: Boolean,
  },

  setup(props, { emit }) {
    // data
    const contractId = ref("");
    const tokenId = ref("");
    const toAddress = ref("");
    const store = useStore();

    const close = () => {
      emit("close");
    };
    const sendTx = async () => {
      const klay = store.state.caver.rpc.klay;
      const fromAddress = store.state.addresses[0];
      const inputData = store.state.caver.abi.encodeFunctionCall(
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
        [fromAddress, toAddress.value, tokenId.value]
      );
      const receipt = await klay.sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
        from: fromAddress,
        to: contractId.value,
        data: inputData,
        gas: 300000,
        value: 0,
      });
      return receipt;
    };

    return { contractId, tokenId, toAddress, close, sendTx };
  },
};
</script>

<style lang='scss' scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color: #ffffff, $alpha: 0.7);

  .modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
      0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
    background-color: #fff;
    padding: 64px 16px;

    i {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: crimson;
      }
    }

    button {
      padding: 20px 30px;
      margin-left: 5px;
      margin-right: 5px;
      border: none;
      font-size: 16px;
      background-color: crimson;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
