<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <Aside />
            </el-aside>
            <el-main>
                <Main></Main>
            </el-main>
        </el-container>
    </div>
</template>  
<script lang="ts" setup>
import Aside from '@/components/Aside.vue';
import Main from '@/components/Main.vue';
</script>
<style lang="less" scoped>
.common-layout {
    width: 100%;
    height: 100%;

    /deep/.el-container {
        height: 650px;
        // width: 100%;
    }

    /deep/.el-aside {
        width: 100px;
        height: 100%;
    }

    /deep/.el-main {
        width: 100%;
        height: 100%;
        --el-main-padding: 0px;
    }

}
</style>