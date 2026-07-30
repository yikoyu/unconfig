<!-- 测试不通过：Vue style 块中 CSS 空注释 -->
<template>
  <div class="test">Hello</div>
</template>

<style>
/**/
.test {
  color: #333;
}
</style>
