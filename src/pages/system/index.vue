<template>
  <div>
    <div class="aside">
      <dl class="list">
        <dt class="item-title">
          <router-link class="item-link" :to="{name: 'systemindex'}">账号管理</router-link>
        </dt>
        <dd class="item-subtitle">
          <router-link class="item-link" :to="{name: 'accountlist'}">账号列表</router-link>
        </dd>
        <dd class="item-subtitle">
          <router-link class="item-link" :to="{name: 'accountadd'}">账号开通</router-link>
        </dd>
        <dt class="item-title">
          <router-link class="item-link" :to="{name: 'rolelist'}">角色管理</router-link>
        </dt>
        <dd class="item-subtitle">
          <router-link class="item-link" :to="{name: 'rolelist'}">角色列表</router-link>
        </dd>
        <dd class="item-subtitle">
          <router-link class="item-link" :to="{name: 'roleadd'}">角色开通</router-link>
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
  name: "systemindex"
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
      display: block;
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