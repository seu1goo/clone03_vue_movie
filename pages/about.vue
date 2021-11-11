<template>
  <div class="container">
    <ul class="about">
      <li class="photo">
        <Loader
          v-if="imageLoading"
          absolute />
        <img
          :src="image"
          :alt="name" />
      </li>
      <li class="name">
        {{ name }}
      </li>
      <li>{{ email }}</li>
      <li>{{ github }}</li>
      <li>{{ phone }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    ...mapState('about', [
      'name',
      'email',
      'github',
      'phone',
      'image'
    ])
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  },
  head() {
    return {
      meta: [
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt OMDbAPI'},
        {hid: 'og:title', property: 'og:title', content: this.name},
        {hid: 'og:description', property: 'og:description', content: this.email},
        {hid: 'og:image', property: 'og:image', content: this.image},
        {hid: 'og:url', property: 'og:url', content: `${process.env.CLIENT_URL}${this.$route.fullPath}`}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding-left: 0;
  text-align: center;

  .photo {
    position: relative;
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    background-color: $gray-200;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      border-radius: 50%;
    }
  }

  .name {
    margin-bottom: 40px;
    font: 40px 'Oswald', sans-serif;
  }
}
</style>
