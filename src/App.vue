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

<style lang="scss">
.test {
  color: $sucColor;
}

/*全局滚动条样式*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-track-piece {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background: #737373;
  cursor: pointer;
  border-radius: 4px;
}

::-webkit-scrollbar-corner {
  display: none;
}

::-webkit-resizer {
  display: none;
}
</style>
