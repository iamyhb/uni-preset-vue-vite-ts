<template>
  <view class="c-box-center">
    <slot></slot>
  </view>
</template>
<script lang="ts" setup></script>

<style scoped lang="scss">
@include b(c-box-center) {
  @include dimensions(100%, 100%);
  @include box-center($justify: center, $align: center);
}
</style>
