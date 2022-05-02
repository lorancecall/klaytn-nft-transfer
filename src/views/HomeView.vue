<template>
  <div>
    <div class="title">
      <h1>Klaytn NFT transfer</h1>
    </div>
    <div class="home">
      <modal-comp @close="toggleModal" :modalActive="modalActive" />
      <alert-comp @closeAlert="toggleAlert" :alertActive="alertActive">
        <div class="alert-content">
          <p>Kaikas is not installed</p>
        </div>
      </alert-comp>
      <button @click="connect" type="button">Connect Wallet</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalComp from "@/components/ModalComp.vue";
import AlertComp from "@/components/AlertComp.vue";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {
    ModalComp,
    AlertComp,
  },

  setup() {
    // console.log(this.$store);

    const store = useStore();

    const modalActive = ref(false);
    const alertActive = ref(false);

    const connect = async () => {
      store.commit("connectWallet");

      if (store.state.klaytn !== null) {
        toggleModal();
      } else {
        toggleAlert();
      }
    };

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const toggleAlert = () => {
      alertActive.value = !alertActive.value;
    };
    return { modalActive, alertActive, toggleModal, toggleAlert, connect };
  },
};
</script>

<style lang="scss" scoped>
.title {
  height: 20vh;
}

.home {
  height: 80vh;
}

.title,
.home {
  background-color: rgba(0, 176, 235, 0.5);
  display: flex;
  justify-content: center;
  // align-items: center;
}
.title {
  h1 {
    position: relative;
    top: 40%;
  }
}

.home {
  button {
    height: 100px;
    position: relative;
    top: 10%;
  }
}
</style>