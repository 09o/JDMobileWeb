<template>
  <div class="wrapper">
    <div class="r-t">
      <img src="/imgs/recommend/r-t.png" alt="">
    </div>
    <div class="recommend-con">
      <div class="items" v-for="item in recommend" :key="item.id">
        <img :src="item.imgUrl" alt="">        
        <p class="title">{{ item.title }}</p>
        <p class="price">￥{{ item.price }}</p>
        <a href="#">看相似</a>
      </div>
    </div>
    <div class="more">
      <a href="#">
        浏览更多
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommend: [
        {
          id: 1,
          imgUrl: '/imgs/recommend/r1.webp',
          title:'2020男双肩包双肩包双肩包时尚潮流高中学生书包休闲旅游旅行包',
          price: 79
        },
        {
          id: 2,
          imgUrl: '/imgs/recommend/r1.webp',
          title:'2020男双肩包时尚潮流高中学生书包休闲旅游旅行包',
          price: 79
        },
        {
          id: 3,
          imgUrl: '/imgs/recommend/r1.webp',
          title:'2020男双肩包时尚潮流高中学生书包休闲旅游旅行包',
          price: 79
        },
        {
          id: 4,
          imgUrl: '/imgs/recommend/r1.webp',
          title:'2020男双肩包时尚潮流高中学生书包休闲旅游旅行包',
          price: 79
        },
        {
          id: 5,
          imgUrl: '/imgs/recommend/r1.webp',
          title:'2020男双肩包时尚潮流高中学生书包休闲旅游旅行包',
          price: 79
        },
        {
          id: 6,
          imgUrl: '/imgs/recommend/r1.webp',
          title:'2020男双肩包时尚潮流高中学生书包休闲旅游旅行包',
          price: 79
        }
      ]
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 100vw;
  padding: 0 10px;
  margin-top: 25px;
}

.r-t img {
  width: 100%;
  vertical-align: bottom;
}

.recommend-con {
  border-top: 1px solid rgba(213, 213, 213, 0.3);
}

.recommend-con .items {
  background-color: #fff;
  padding-bottom: 25px;
}

.recommend-con .items img {
  width: 100%;
}

.recommend-con {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
  row-gap: 5px;
}

.title {
  font-size: 13px;
  color: #232326;
  margin: 5px 0 3px;
  padding: 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.price {
  float: left;
  color: #f23030;
}

.items a {
  display: block;
  padding: 3px 6px;
  border: 1px solid #ccc;
  float: right;
  font-size: 12px;
  color: #333;
  margin-right: 5px;
}

.more {
  margin: 10px 0 50px;
  line-height: 46px;
  text-align: center;
}

.more a {
  display: block;
  color: #fff;
  background-color: rgba(238, 99, 99, 0.76);
}
</style>