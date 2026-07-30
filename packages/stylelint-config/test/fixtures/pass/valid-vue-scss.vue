<!-- 测试通过：Vue 单文件组件，style lang="scss" 基础语法 -->
<template>
  <div class="test">Hello</div>
</template>

<style lang="scss">
$primary: #333;
$font-size: 16px;

.test {
  font-size: $font-size;
  color: $primary;

  &-modifier {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 4px;
  }
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  @include flex-center;
}
</style>
