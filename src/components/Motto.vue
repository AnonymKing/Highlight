<template>
  <div class="motto-wrapper">
    <div class="avatar">
      <a href="https://github.com/AnonymKing/Highlight" title="Author" target="_blank">
        <img src="../assets/img/logo.jpg">
      </a>
    </div>

    <div>
      <h1>{{ motto }}</h1>
      <h4>{{ tips }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Motto",
  props: {
    motto: String,
    tips: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.motto-wrapper {
  text-align: center;
  color: #2c3e50;
  margin: 60px 0 40px 0;
}

.avatar img {
  width: 128px;
  height: auto;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 0 0 0.36em rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  transition: all ease 0.4s;
  cursor: pointer;
}

.avatar img:hover {
  position: relative;
  transform: translateY(-0.6em);
  cursor: pointer;
}
</style>
