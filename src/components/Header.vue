<template>
  <header>
    <link href="https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps:700&amp;subset=latin-ext" rel="stylesheet">
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
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
    },
    methods: {
      changeTitle: function(){
        this.$emit('changeTitle', 'Vue Ninjas');
      }
    }
  }
</script>
<style scoped>
  header{
    position: relative;
    right: 0;
    top: 0;
    left: 0;
    background-color: lightgreen;
    text-align: center;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 7px 6px;
  }
  h1{
    font-family: 'Oleo Script Swash Caps', cursive;
    font-size: 50px;
    color: #222;
    text-align: center;
  }
</style>
