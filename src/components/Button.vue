<template>
  <button>
    <span class="mybutton">{{title}}</span>
  </button>
</template>

<script>
export default {
  name: "mybutton",
  props: {
    title: {
      type: String,
      default: () => {
        return "button";
      }
    }
  }
};
</script>

<style scoped>
.mybutton {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  border: none;
  border-radius: 0.2rem;
  box-sizing: border-box;
  background: #1bb5f1;
  padding: 0.6rem 2rem;
}
.mybutton:active {
  background: #62c3e9;
}

button {
  /* margin: 0; */
  margin: 2rem;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  opacity: 1;
}
</style>