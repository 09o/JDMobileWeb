<template>
  <div>
    <div class="header">
      <a href="#/">返回</a>
    </div>
    <div class="flex j-c a-i content">
      详情页面{{ id }}
    </div>
  </div>
</template>

<script>
export default {
  // >> props: true
  // props: ['id']

  // computed: {
  //   typeid() {
  //     return this.$route.params.id
  //   }
  // }
  computed: {
    id() {
      return this.$route.query.id
    }
  },
}
</script>

<style scoped>
.header {
  line-height: 44px;
  background-color: #de0000;
  padding: 0 20px;
}

.header a {
  color: #fff;
}

.content {
  width: 100%;
  height: calc(100vh - 44px);
  background-color: #f6f6f6;
}
</style>