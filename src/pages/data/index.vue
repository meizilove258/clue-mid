<template>
  <div class="dataindex">
    <div class="aside">
      <dl class="list">
        <dt class="item-title">
          <router-link class="item-link" :to="{name: 'dataoverview'}">数据资产总览</router-link>
        </dt>
        <dd class="item-subtitle">
          <router-link class="item-link" :to="{name: 'dataoverview'}">数据资产概述</router-link>
        </dd>
        <dd class="item-subtitle">
          <router-link class="item-link" :to="{name: 'citydata'}">城市数据资产表</router-link>
        </dd>
        <dd class="item-subtitle">
          <router-link class="item-link" :to="{name: 'loupandata'}">楼盘数据资产表</router-link>
        </dd>
      </dl>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataindex"
};
</script>

<style lang="scss" scoped>
.aside {
  float: left;
  width: 280px;
  background-color: #000000;
  .list {
    .item-title {
      padding-left: 40px;
    }
    .item-subtitle {
        padding-left: 60px;
    }
    .item-link {
      color: #ffffff;
      height: 60px;
      line-height: 60px;
    }
  }
}
.main {
  margin-left: 280px;
}
</style>