<template>
  <footer>
    <p>Copyright 2017 {{ title }}</p>
  </footer>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
      return{
      }
    }
  }
</script>
<style scoped>
  footer{
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #222;
    text-align: center;
    width: 100%;
    height: 70px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
