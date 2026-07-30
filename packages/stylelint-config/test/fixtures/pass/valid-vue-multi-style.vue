<!-- 测试通过：Vue 单文件组件，同时包含 CSS 和 SCSS 两个 style 块 -->
<template>
  <div>Hello</div>
</template>

<style>
.test {
  color: #333;
}
</style>

<style lang="scss">
$primary: #333;

.test {
  color: $primary;
}
</style>
