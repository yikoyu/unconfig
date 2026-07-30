<!-- 测试不通过：Vue style lang="scss" 中未知 @规则 -->
<template>
  <div>Hello</div>
</template>

<style lang="scss">
@unknown-at-rule {
  color: #333;
}
</style>
