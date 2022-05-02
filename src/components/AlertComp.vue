<template>
  <transition name="alert-animation">
    <div v-show="alertActive" class="alert">
      <transition name="alert-animation-inner">
        <div v-show="alertActive" class="alert-inner">
          <i @click="closeAlert" class="fa-regular fa-circle-xmark"></i>
          <!-- Alert Content -->
          <slot />
          <div class="alert-inner-button">
            <button @click="closeAlert" type="button">Close</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    alertActive: Boolean,
  },

  setup(props, { emit }) {
    const closeAlert = () => {
      emit("closeAlert");
    };

    return { closeAlert };
  },
};
</script>

<style lang='scss' scoped>
.alert-animation-enter-active,
.alert-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.alert-animation-enter-from,
.alert-animation-leave-to {
  opacity: 0;
}

.alert-animation-inner-enter-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.alert-animation-inner-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.alert-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.alert-animation-inner-leave-to {
  transform: scale(0.8);
}

.alert {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color: #ffffff, $alpha: 0.7);

  .alert-inner {
    position: relative;
    max-width: 300px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
      0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
    background-color: #fff;
    padding: 10px 10px;

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

    .alert-inner-button {
      display: flex;
      justify-content: center;
      margin: auto;
    }

    button {
      padding: 5px 5px;
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
