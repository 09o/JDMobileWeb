<template>
  <div class="flex a-i foot">
    <a :href="item.id===2?'#/categories':'#'" v-for="item in footer" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: [
        {
          id: 1,
          imgUrl: '/imgs/b1.png'
        },
        {
          id: 2,
          imgUrl: '/imgs/b2.png'
        },
        {
          id: 3,
          imgUrl: '/imgs/b3.png'
        },
        {
          id: 4,
          imgUrl: '/imgs/b4.png'
        },
        {
          id: 5,
          imgUrl: '/imgs/b5.png'
        }
      ]
    }
  },
}
</script>

<style scoped>
.foot {
  width: 100vw;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 10px 0 10px 3px rgba(0, 0, 0, 0.2);
}

.foot img {
  height: 50px;
  vertical-align: bottom;
}
</style>