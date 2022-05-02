<template>
  <div>
    <p>
      <label> NFT Contract Address </label>
      <input
        type="text"
        :value="contractId"
        placeholder="Contract id"
        @input="$emit('update:contractId', $event.target.value)"
        pattern="0x.{40}"
      />
    </p>
    <p>
      <label> Token ID </label>
      <input
        type="text"
        :value="tokenId"
        placeholder="Token id"
        @input="$emit('update:tokenId', $event.target.value)"
        pattern="\d+"
      />
    </p>
    <p>
      <label> To Address </label>
      <input
        type="text"
        :value="toAddress"
        placeholder="To address"
        @input="$emit('update:toAddress', $event.target.value)"
        pattern="0x.{40}"
      />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    contractId: String,
    tokenId: String,
    toAddress: String,
  },
};
</script>

<style lang="scss" scoped>
label {
  width: 50%;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>