<!-- 测试通过：Vue 单文件组件，style lang="scss" scoped，含 mixins、placeholders、rpx、条件注释 -->
<template>
  <div class="test">Hello</div>
</template>

<style lang="scss" scoped>
$primary: #333;
$font-size: 16px;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

%button-base {
  padding: 8rpx 16rpx;
  border-radius: 4rpx;
}

.test {
  @include flex-center;

  font-size: $font-size;
  color: $primary;

  // #ifndef H5
  background-color: #f2f3f5;
  // #endif

  &-modifier {
    @extend %button-base;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
