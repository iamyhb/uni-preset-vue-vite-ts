<template>
  <view class="aab cboxcenter"> 111</view>

  <view class="demo-uni-row">
    <uni-row>
      <uni-col :span="12">
        <view class="dark"
          ><my-box-center>{{ store.count }}</my-box-center></view
        >
      </uni-col>
      <uni-col :span="12">
        <view class="light" @click="add"></view>
      </uni-col>
    </uni-row>
  </view>
  <view class="text csinglecenter bg-one radius-10 decoration fc-four fz-40 mh-10">
    <view class="text__logo">123</view>
    <text class="text__text">123</text>
  </view>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../../store/store'

const store = useCounterStore()
const add = () => {
  store.increment()
}
</script>
<style scoped lang="scss">
.demo-uni-row {
  width: 100rpx;
}
.aab {
  background-color: red;
  @include dimensions(200rpx, 200rpx);
}
.dark {
  background-color: red;
  height: 100rpx;
}
.light {
  background-color: yellow;
  height: 100rpx;
}
@include b(text) {
  @include dimensions(1000rpx, 1000rpx);
}
</style>
