<template>
  <div class="flex a-i header">
    <div class="nav">
      <a href="#">
        <span></span>
      </a>
    </div>
    <div class="search">
      <input type="text" placeholder="iPhone 11">
      <div class="logo-jd"></div>
      <div class="cut-line"></div>
      <div class="search-icon"></div>
    </div>
    <div class="login">
      <router-link to="/login">
        登录
      </router-link>
      <!-- <a style="font-size: 14px; color: #fff" href="#">
        登录
      </a> -->
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.header {
  position: fixed;
  width: 100vw;
  height: 44px;
  top: 0;
  justify-content: space-around;
  background-color: #de0000;
  padding: 0 10px;
  z-index: 999;
}

.header .nav a {
  display: flex;
  align-items: center;
  width: 20px;
  height: 18px;
  border: 2px solid #fff;
  border-left: none;
  border-right: none;
}

.header .nav a span {
  display: block;
  width: 20px;
  height: 2px;
  background: #fff;
}

.header input {
  display: block;
  width: 70vw;
  height: 30px;
  border: 0;
  outline: none;
  border-radius: 30px;
  padding: 0 10px 0 68px;
}

.search {
  position: relative;
}

.logo-jd {
  position: absolute;
  width: 20px;
  height: 15px;
  background: url('/imgs/jd-sprites.png') 0 0 no-repeat;
  background-size: 1000%;
  z-index: 20;
  left: 15px;
  bottom: 8px;
}

.cut-line {
  position: absolute;
  left: 42px;
  width: 1px;
  border-radius: 1px;
  height: 15px;
  top: 8px;
  background-color: #ccc;
}

.search-icon {
  position: absolute;
  left: 48px;
  bottom: 7px;
  width: 18px;
  height: 15px;
  background: url('/imgs/jd-sprites.png') -74px 0 no-repeat;
  background-size: 1000%;
}

.login a {
  font-size: 14px;
  color: #fff;
}
</style>