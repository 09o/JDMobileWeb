<template>
  <div class="flex j-c a-i floor-outer">
    <div class="floor-inner flex">
      <div class="flex a-i title-wrapper">
        <div class="left-sec flex">
          <div class="tit">京东秒杀</div>
          <div class="countdown">
            <span>14点场</span>
            <span>00:53:12</span>
          </div>
        </div>
        <div class="right-sec">
          <a href="#">
            更多秒杀
          </a>
        </div>
      </div>
      <ul class="content-list flex">
        <li v-for="item in goodsList" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p>￥{{ item.nowPrice }}</p>
          <p><s>￥{{ item.oldPrice }}</s></p>
        </li>
      </ul>
    </div>
    <div class="discount">
      <div>
        <img src="/imgs/floor/d1.png" alt="">
        <img src="/imgs/floor/d2.png" alt="">
      </div>
      <div>
        <img src="imgs/floor/d3.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goodsList: [
          {
            id: 1,
            imgUrl: '/imgs/floor/f1.jpg',
            nowPrice: '778',
            oldPrice: '999'
          },
          {
            id: 2,
            imgUrl: '/imgs/floor/f2.jpg',
            nowPrice: '778',
            oldPrice: '999'
          },
          {
            id: 3,
            imgUrl: '/imgs/floor/f3.jpg',
            nowPrice: '778',
            oldPrice: '999'
          },
          {
            id: 4,
            imgUrl: '/imgs/floor/f4.jpg',
            nowPrice: '778',
            oldPrice: '999'
          },
          {
            id: 5,
            imgUrl: '/imgs/floor/f5.jpg',
            nowPrice: '778',
            oldPrice: '999'
          },
          {
            id: 6,
            imgUrl: '/imgs/floor/f6.jpg',
            nowPrice: '778',
            oldPrice: '999'
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .floor-outer {
    width: 100vw;
    flex-direction: column;
    background-color: #f6f6f6;
    padding: 0px 10px;
  }

  .floor-inner {
    padding: 5px 10px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .content-list {
    margin-top: 10px;
    overflow: auto;
  }

  .content-list li {
    margin-right: 10px;
    text-align: center;
  }

  .content-list li img {
    width: 20vw;
  }

  .content-list li :nth-child(2) {
    font-size: 14px;
    color: #f2270c;
    font-weight: 600;
  }

  .content-list li :last-child {
    font-size: 12px;
    color: #999;
  }

  .title-wrapper {
    justify-content: space-between;
  }

  .title-wrapper .left-sec {
    font-size: 12px;
    color: #f2270c;
  }

  .title-wrapper .left-sec .tit {
    font-size: 14px;
    color: #333;
    margin-right: 5px;
  }

  .title-wrapper .left-sec .countdown {
    border: 1px solid #f2270c;
    border-radius: 16px;
    padding: 0 5px 0 0;
    font-weight: 600;
  }

  .countdown span {
    display: inline-block;
  }

  .countdown span:first-child {
    height: 100%;
    background: #f2270c;
    color: #fff;
    border-radius: 16px;
    padding: 0 8px 0 5px;
    margin-right: 3px;
    font-weight: 500;
  }

  .right-sec a {
    display: block;
    font-size: 12px;
    color: #f2270c;
  }

  .right-sec a:after {
    content: ">";
  }

  .discount {
    width: 100%;
  }

  .discount img {
    width: 50%;
  }

  .discount div:last-child img {
    margin-top: 5px;
    width: 100%;
  }
</style>