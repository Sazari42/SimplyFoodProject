<template>
  <div id="images">
    <input type="text" v-model="keyword" placeholder="Search here!"/>
    <ul>
        <li v-for="image in filteredImages" @click="image.show = !image.show">
          <link href="https://fonts.googleapis.com/css?family=Poppins:500&amp;subset=latin-ext" rel="stylesheet">
          <h2>{{ image.name }}</h2>
          <img v-bind:src="image.img">
          <transition name="fade">
              <h3 v-show="image.show">{{ image.description }}</h3>
          </transition>
        </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        keyword: ""
      }
    },
    computed: {
      filteredImages: function () {
        return this.images.filter((image) => {
          return image.name.match(this.keyword)
        });
      }
    }
  }
</script>
<style scoped>
  #images{
    min-height: 70.6vh;
    width: 100%;
    max-width: 1400px;
    margin: 48px auto;
    box-sizing: border-box;
    text-align: center;
    padding-bottom: 70px;
  }
  input {
    padding: 4px 12px;
    color: rgba(0, 0, 0, .70);
    border: 1px solid rgba(0, 0, 0, .12);
    transition: .15s all ease-in-out;
    background: white;
  }
  input:focus {
    outline: none;
    transform: scale(1.05);
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }
  li{
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    height: 300px;
    flex-basis: 350px;
    text-align: center;
    padding: 30px;
    margin: 10px;
    transition: .15s all ease-in-out;
    background-color: white;
    font-family: 'Poppins', sans-serif;
  }
  li img {
    max-width: 300px;
    max-height: 200px;
  }
  li h2 {
    margin: 0;
  }
  li:hover {
    transform: scale(1.1);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
