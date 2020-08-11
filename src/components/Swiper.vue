<template>
  <div class="wrapper">
    <div class="container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img src="/imgs/s1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/s2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/s3.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/s4.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/s5.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptions: {
          loop: true,
          autoplay: {
            delay: 2000
          },
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    width: 100vw;
    height: 20vh;
    padding: 0 15px;
    background-color: #f6f6f6;
  }

  .container {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>