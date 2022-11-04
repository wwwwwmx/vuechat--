<template>
    <el-menu default-active="2">
        <el-menu-item index="1">
            <el-icon>
                <ChatDotRound />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="2" @click="changeRouter">
            <el-icon>
                <User />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon>
                <HelpFilled />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <ChatLineSquare />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="5">
            <el-icon>
                <Menu />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="6">
            <el-icon>
                <setting />
            </el-icon>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import router from '@/router';
const changeRouter = () => {
    router.push({
        path: '/list-view'
    })
}

</script>
<style lang="less" scoped>
:deep .el-menu {
    width: 30px;
    height: 100%;
    background-color: none;

    :deep .el-menu--vertical {
        height: 100%;
    }
}
</style>