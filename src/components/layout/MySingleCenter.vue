<template>
  <view class="c-single-center" :class="{ 'c-single-center--vertical': vertical }">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
interface Props {
  vertical: boolean
}

withDefaults(defineProps<Props>(), {
  vertical: false
})
</script>

<style scoped lang="scss">
@include b(c-single-center) {
  @include dimensions(100%, 100%);
  @include grid($align-items: center);
  @include m(vertical) {
    flex-direction: column;
  }
}
</style>
