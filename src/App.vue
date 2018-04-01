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
            'name1',
            'https://cdn.pixabay.com/photo/2017/05/24/11/40/desert-2340326_960_720.jpg',
            'description1',
            false
          ),
          new ContentImage(
            'name2',
            'https://cdn.pixabay.com/photo/2018/01/11/19/02/architecture-3076685_960_720.jpg',
            'description2',
            false
          ),
          new ContentImage(
            'name3',
            'https://cdn.pixabay.com/photo/2018/03/14/16/54/winter-3225687_960_720.jpg',
            'description3',
            false
          ),
          new ContentImage(
            'name4',
            'https://cdn.pixabay.com/photo/2017/11/07/00/07/fantasy-2925250_960_720.jpg',
            'description4',
            false
          ),
          new ContentImage(
            'name5',
            'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
            'description5',
            false
          ),
          new ContentImage(
            'name6',
            'https://cdn.pixabay.com/photo/2017/10/12/20/15/photoshop-2845779_960_720.jpg',
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
