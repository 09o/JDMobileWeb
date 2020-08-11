<template>
  <div class="wrapper">
    <div class="section-title">
      <img src="/imgs/collection/ct1.png" alt="">
    </div>
    <div class="section1">
      <div class="rows flex">
        <div class="row1 flex">
          <div>
            <p class="gradient-text gradient-text-one">幸福感</p>
            <p>网红家具给你幸福感</p>
            <div>
              <img src="/imgs/collection/d1.jpg" alt="">
              <img src="/imgs/collection/d2.jpg" alt="">
            </div>
          </div>
          <div>
            <p class="gradient-text gradient-text-one">唱片潮流</p>
            <p>遇见春光</p>
            <div>
              <img src="/imgs/collection/d3.jpg" alt="">
              <img src="/imgs/collection/d4.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="row2 flex">
          <div>
            <p>唱片潮流</p>
            <p>遇见春光</p>
            <div>
              <img src="/imgs/collection/d5.jpg" alt="">
            </div>
          </div>
          <div>
            <p>唱片潮流</p>
            <p>遇见春光</p>
            <div>
              <img src="/imgs/collection/d6.jpg" alt="">
            </div>
          </div>
          <div>
            <p>唱片潮流</p>
            <p>遇见春光</p>
            <div>
              <img src="/imgs/collection/d7.jpg" alt="">
            </div>
          </div>
          <div>
            <p>唱片潮流</p>
            <p>遇见春光</p>
            <div>
              <img src="/imgs/collection/d8.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">
      <img src="/imgs/collection/ct2.png" alt="">
    </div>
    <div class="section2">
      <ul class="flex">
        <li v-for="item in collection" :key="item.id">
          <p class="gradient-text gradient-text-one">{{ item.title }}</p>
          <p>{{ item.desc }}</p>
          <img :src="item.imgUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        collection: [
          {
            id: 1,
            title: '免息星球',
            desc: '白条免息购',
            imgUrl: '/imgs/collection/c1.jpg'
          },
          {
            id: 2,
            title: '每日特价',
            desc: '9.9疯抢',
            imgUrl: '/imgs/collection/c2.jpg'
          },
          {
            id: 3,
            title: '品牌闪购',
            desc: '汇大牌好价',
            imgUrl: '/imgs/collection/c3.png'
          },
          {
            id: 4,
            title: '京东直播',
            desc: '边看边买',
            imgUrl: '/imgs/collection/c4.jpg'
          },
          {
            id: 5,
            title: '免息星球',
            desc: '白条免息购',
            imgUrl: '/imgs/collection/c1.jpg'
          },
          {
            id: 6,
            title: '免息星球',
            desc: '白条免息购',
            imgUrl: '/imgs/collection/c2.jpg'
          },
          {
            id: 7,
            title: '免息星球',
            desc: '白条免息购',
            imgUrl: '/imgs/collection/c3.png'
          },
          {
            id: 8,
            title: '免息星球',
            desc: '白条免息购',
            imgUrl: '/imgs/collection/c4.jpg'
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    width: 100vw;
  }

  .section1,
  .section2 {
    padding: 0 10px;
  }

  .section-title img {
    width: 100%;
    vertical-align: bottom;
  }

  .section1 {
    margin-bottom: 10px;
  }

  .section1 .rows {
    flex-direction: column;
    background-color: #fff;
  }

  .section1 .rows img {
    width: 60px;
    height: 60px;
  }

  .section1 .rows .row1 > div {
    width: 50%;
    padding: 5px 8px 10px;
    border: 1px solid rgba(213, 213, 213, 0.3);
    border-top: none;
    border-left: none;
  }

  .section1 .rows .row1 > div:last-child {
    border-right: none;
  }
 
  .section1 .rows .row2 > div {
    width: 25%;
    padding: 5px 8px 10px;
    border-right: 1px solid rgba(213, 213, 213, 0.3);
  }

  .section1 .rows .row2 > div:last-child {
    border-right: none;
  }

  .row1 > div p:nth-child(2),
  .row2 > div p:nth-child(2) {
    font-size: 12px;
    color: #666771;
    margin-bottom: 5px;
  }

  .row2 > div p:first-child {
    font-size: 16px;
    font-weight: bolder;
  }

  .row1 > div > div {
    display: flex;
    justify-content: space-evenly;
  }
  
  .row2 > div > div {
    display: flex;
    justify-content: center;
  }


  .section2 {
    width: 100%;
  }

  .section2 ul {
    flex-wrap: wrap;
    background-color: #fff;
  }

  .section2 ul li {
    width: 25%;
    padding: 5px 0 5px 10px;
    position: relative;
  }

  .section2 ul img {
    width: 100%;
    vertical-align: bottom;
    margin-bottom: 5px;
  }

  .section2 li p:nth-child(2) {
    font-size: 12px;
    margin-bottom: 8px;
  }

  /* 文字渐变效果 */
  .gradient-text {
    text-align: left;
    /* text-indent: 12px; */
    /* line-height: 50px; */
    font-size: 16px;
    font-weight: bolder;
    position: relative;
  }

  .gradient-text-one {
    background-image: -webkit-linear-gradient(left, #ff2a2a, #f139d2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section2 ul li::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    border: 1px solid rgba(213, 213, 213, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0);
  }

  .section2 ul li:nth-child(-n+4):before {
    border: none;
    border-right: 1px solid rgba(213, 213, 213, 0.3);
  }
  
  .section2 ul li:nth-child(4):before {
    border-right: none;
  }

  .section2 ul li:nth-child(n+5):before {
    border-left: none;
    border-bottom: none;
  }

  .section2 ul li:nth-child(8):before {
    border-right: none;
  }
</style>