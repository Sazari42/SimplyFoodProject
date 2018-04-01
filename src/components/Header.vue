<template>
  <header v-bind:style="bgc" @click="randColor">
    <link href="https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps:700&amp;subset=latin-ext" rel="stylesheet">
    <h1>{{ title }}</h1>
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
        bgc: {
          backgroundColor: ''
        }
      }
    },

    methods: {
      randColor: function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.bgc.backgroundColor = "rgb(" + r + ',' + g + ',' + b + ")";
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
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  h1{
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                supported by Chrome and Opera */
    font-family: 'Oleo Script Swash Caps', cursive;
    font-size: 50px;
    color: #222;
    text-align: center;
    text-shadow: 1px 1px #ffffff, 1px 1px #ffffff, 1px 1px #ffffff;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
