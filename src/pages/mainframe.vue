<template>
    <div>
        <div class="header clearfixed">
            <div class="logo"></div>
            <ul class="list clearfixed">
                <li class="item">
                    <router-link class="item-link" :to="{name: 'dataindex'}">数据资产管理</router-link>
                </li>
                <li class="item">
                    <router-link class="item-link" :to="{name: 'systemindex'}">系统管理</router-link>
                </li>
            </ul>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainframe'
}
</script>

<style lang="scss" scoped>
.header{
    height: 60px;
    background-color: #000000;
    .logo{
        height: 60px;
        width: 300px;
        float: left;
    }
    .list{
        float: left;
        .item{
            float: left;
            height: 60px;
            line-height: 60px;
            color: #ffffff;
            margin-right: 30px;
            .item-link{
                display: block;
                height: 60px;
                line-height: 60px;
                color: #ffffff;
                text-decoration: none;
            }
        }
    }
}
</style>