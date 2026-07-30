<!-- 测试不通过：Vue style lang="less" 中非法单位值 -->
<template>
  <div class="test">Hello</div>
</template>

<style lang="less">
.test {
  font-size: 16px;
  color: #333;
  width: 10xx;
}
</style>
