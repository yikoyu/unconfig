<!-- 测试通过：Vue 单文件组件，style lang="less"，含 mixin 调用 -->
<template>
  <div class="test">Hello</div>
</template>

<style lang="less">
.mixin() {
  padding: 8px 16px;
}

@primary: #333;

.test {
  color: @primary;
  .mixin();
}
</style>
