<template>
  <div class="container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <ul class="flex j-c a-i nav-list">
          <li class="flex j-c a-i" :key="item.id" v-for="item in navList">
            <!-- <router-link :to="'/detail/'+item.id">{{item.title}}</router-link> -->
            <router-link :to="'/detail?id='+item.id">
              <img :src="item.imgUrl" alt="">
              <p>
                {{item.title}}
              </p>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="flex j-c a-i nav-list">
          <li class="flex j-c a-i" :key="item.id" v-for="item in navList">
            <a href="#">
              <img :src="item.imgUrl" alt="">
              <p>{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
        },
        navList: [
          {
            id: 1,
            title: '京东超市',
            imgUrl: '/imgs/n1.png'
          },
          {
            id: 2,
            title: '数码电器',
            imgUrl: '/imgs/n2.png'
          },
          {
            id: 3,
            title: '京东服饰',
            imgUrl: '/imgs/n3.png'
          },
          {
            id: 4,
            title: '京东生鲜',
            imgUrl: '/imgs/n4.png'
          },
          {
            id: 5,
            title: '京东到家',
            imgUrl: '/imgs/n5.png'
          },
          {
            id: 6,
            title: '充值缴费',
            imgUrl: '/imgs/n6.png'
          },
          {
            id: 7,
            title: '9.9元拼',
            imgUrl: '/imgs/n7.png'
          },
          {
            id: 8,
            title: '领券',
            imgUrl: '/imgs/n8.png'
          },
          {
            id: 9,
            title: '领金贴',
            imgUrl: '/imgs/n9.png'
          },
          {
            id: 10,
            title: 'PLUS会员',
            imgUrl: '/imgs/n10.png'
          }
        ]
      }
    },
  }
</script>

<style scoped>
  .container {
    margin-top: 10px;
  }
  .nav-list {
    flex-wrap: wrap;
    position: relative;
    background-color: #f6f6f6;
    padding: 0 0 30px;
  }

  .nav-list li {
    width: 20vw;
    height: 20vw;
    text-align: center;
  }

  .nav-list li a {
    display: block;
    font-size: 14px;
    color: #666;
  }

  .nav-list img {
    width: 44px;
    vertical-align: bottom;
    margin-top: 10px;
  }

  .nav-list p {
    margin-top: 6px;
  }

  .swiper-pagination {
    bottom: 10px;
  }
</style>