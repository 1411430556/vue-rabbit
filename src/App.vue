<script setup>

</script>

<template>
  <!--一级路由出口组件-->
  <RouterView/>
  <el-backtop :bottom="70">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        color: #1dc779;
      "
    >
      UP
    </div>
  </el-backtop>
</template>

<style scoped lang="scss">
.test {
  color: $sucColor;
}
</style>
