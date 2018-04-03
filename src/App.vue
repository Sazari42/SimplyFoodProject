<template>
  <div class="container">
      <app-header v-bind:title="title" ></app-header>
      <app-images v-bind:images="images"></app-images>
      <app-footer v-bind:title="footerTitle"></app-footer>
    </div>
</template>

<script>
  // Imports
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Images from './components/Images.vue';
  class ContentImage {
    constructor(name, img, description, show) {
      this.name = name;
      this.img = img;
      this.description = description;
      this.show = show;
    }
  }
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-images': Images
    },
    data () {
      return {
        images: [
          new ContentImage(
            'Green Salad',
            'https://sun9-3.userapi.com/c824602/v824602754/105f09/yKLMslLSdC8.jpg',
            'description1',
            false
          ),
          new ContentImage(
            'Butternut Squash Soup',
            'https://sun9-1.userapi.com/c824602/v824602754/105f10/pSHb5ecHWCU.jpg',
            'description2',
            false
          ),
          new ContentImage(
            'Salmon Appetizer',
            'https://sun9-3.userapi.com/c824602/v824602754/105f17/Nn1AngT1SJk.jpg',
            'description3',
            false
          ),
          new ContentImage(
            'Mediterranean Bagel',
            'https://sun9-1.userapi.com/c824602/v824602754/105f1e/EJ1DXyYda6Y.jpg',
            'description4',
            false
          ),
          new ContentImage(
            'Pizza Margherita',
            'https://sun9-3.userapi.com/c824602/v824602754/105f25/FYanfBDD-Tg.jpg',
            'description5',
            false
          ),
          new ContentImage(
            'Classy Burger',
            'https://sun9-3.userapi.com/c824602/v824602754/105f2c/wknGrPDaXMo.jpg',
            'description6',
            false
          )
        ],
        title: 'Simply Food',
        footerTitle: "Don't forget to click on image! (:"
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
  }

  .container {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
