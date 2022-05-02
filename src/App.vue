<template>
  <router-view />
</template>

<script>
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: bolder-box;
  font-family: "Karla", sans-serif;
}

nav {
  button {
    position: relative;
    background-color: gray;
    font-size: 15px;
    padding: 10px 10px;
    right: 0;
  }
}

button {
  padding: 20px 30px;
  border: none;
  font-size: 16px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
}
</style>
