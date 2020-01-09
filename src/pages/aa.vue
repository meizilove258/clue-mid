<template>
  <div>
    
    <el-button>element-ui button</el-button>
    <div>我是路由中的AA页面组件</div>
  </div>
</template>

<script>
import { api } from "../api/index";

export default {
  data() {
    return {};
  },
  mounted() {
    this.aa();
    this.bb();
  },
  methods: {
    aa() {
      api.aa({ type: 1, id: 2 }).then(() => {});
    },
    bb() {
      api.bb({ type: 1 }).then(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>

</style>