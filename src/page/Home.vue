<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
    <Navi></Navi>
    <Discount></Discount>
    <Collection></Collection>
    <Recommend></Recommend>
    <div v-if="isShow" @click="backTop" class="to-head">^</div>
    <Foot></Foot>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Swiper from '@/components/Swiper'
  import Navi from '@/components/Navi'
  import Discount from '@/components/Discount'
  import Collection from '@/components/Collection'
  import Recommend from '@/components/Recommend'
  import Foot from '@/components/Foot'
  export default {
    components: {
      Header,
      Swiper,
      Navi,
      Discount,
      Collection,
      Recommend,
      Foot
    },
    data() {
      return {
        isShow: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed() {
      window.addEventListener('scroll', this.scrollToTop)
    },
    methods: {
      backTop() {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollToTop + ispeed
          if (that.scrollTop <= 0) {
            clearInterval(timer)
          }
        }, 16)
      },
      scrollToTop() {
        const that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 400) {
          that.isShow = true
        } else {
          that.isShow = false
        }
      }

    }
  }
</script>

<style scoped>
  .home {
    width: 100vw;
    /* height: 100vh; */
    background-color: #f6f6f6;
    /* overflow: scroll; */
    padding-top: 54px;
  }

  .to-head {
    position: fixed;
    right: 10px;
    bottom: 70px;
    width: 42px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    border-radius: 50%;
    color: #ccc;
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
  }
</style>